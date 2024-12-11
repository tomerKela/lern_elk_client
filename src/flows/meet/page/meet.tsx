import React, { useEffect, useRef, useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

interface User {
  socketId: string;
  userEmail: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [isCalling, setIsCalling] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    const userEmail = prompt('Enter your user email:')!;
    socket.emit('join', userEmail);

    socket.on('users', (users: User[]) => {
      setUsers(users);
    });

    socket.on('call', async ({ from, offer }: { from: string; offer: RTCSessionDescriptionInit }) => {
      if (!pcRef.current) return;

      await pcRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pcRef.current.createAnswer();
      await pcRef.current.setLocalDescription(answer);

      socket.emit('answer', { to: from, answer });
    });

    socket.on('answer', async ({ from, answer }: { from: string; answer: RTCSessionDescriptionInit }) => {
      if (!pcRef.current) return;

      await pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    return () => {
      socket.off('users');
      socket.off('call');
      socket.off('answer');
    };
  }, []);

  const startCall = async (to: string) => {
    const pc = new RTCPeerConnection();
    pcRef.current = pc;

    localStream?.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socket.emit('call', { to, offer });
    setIsCalling(true);
  };

  useEffect(() => {
    if (localStream && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setLocalStream(stream);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4">Users</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.socketId}>
            <ListItemText primary={user.userEmail} />
            <Button variant="contained" color="primary" onClick={() => startCall(user.socketId)}>
              Call
            </Button>
          </ListItem>
        ))}
      </List>
      <div>
        <video ref={localVideoRef} autoPlay muted style={{ width: '300px' }} />
        <video ref={remoteVideoRef} autoPlay style={{ width: '300px' }} />
      </div>
    </div>
  );
};

export default App;
