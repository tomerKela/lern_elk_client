import styled from "@emotion/styled";
import { format } from "date-fns";
import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { SearchResult, useChatStore } from "./chatStore";
import { SearchInChatModal } from "./searchInChatModal";

// Types

const ChatContainer = styled.div`
  display: flex;
  height: 94vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ChatList = styled.ul`
  list-style-type: none;
  padding: 0;
  flex: 1;
  overflow-y: auto;
`;

const ChatItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#e6f2ff" : "white")};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#e6f2ff" : "#f5f5f5")};
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChatWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-left: 1px solid #e0e0e0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const MessageBubble = styled.div<{ isSender: boolean }>`
  max-width: 70%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 18px;
  background-color: ${(props) => (props.isSender ? "#dcf8c6" : "#f0f0f0")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MeetingSuggestion = styled(MessageBubble)<{
  status?: "approved" | "rejected";
}>`
  background-color: ${(props) => {
    switch (props.status) {
      case "approved":
        return "#dcf8c6";
      case "rejected":
        return "#f8c6c6";
      default:
        return "#f0f0f0";
    }
  }};
  border: 1px solid #b3d9ff;
  display: flex;
  flex-direction: column;
`;

const MeetingActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SendButton = styled(Button)`
  margin-left: 10px;
`;

const ScheduleButton = styled(Button)`
  background-color: #2196f3;
  margin-left: 10px;

  &:hover {
    background-color: #1e87db;
  }
`;

const ApproveButton = styled(Button)`
  background-color: #4caf50;
  margin-right: 10px;
`;

const RejectButton = styled(Button)`
  background-color: #f44336;
`;

export const ChatPage: React.FC = () => {
  const {
    chats,
    activeChat: selectedChatID,
    setActiveChat,
    sendMessage,
    responseToMeetingInvitation,
  } = useChatStore();
  const [inputValue, setInputValue] = useState("");
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const messageListRef = useRef<HTMLDivElement>(null);
  const [chatSearchQuery, setChatSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [chats, selectedChatID]);

  const handleSendMessage = () => {
    if (inputValue.trim() && selectedChatID) {
      sendMessage(selectedChatID, {
        sender: "You",
        content: inputValue,
        type: "text",
      });
      setInputValue("");
    }
  };

  const handleSendMeetingSuggestion = () => {
    if (meetingDate && meetingTime && selectedChatID) {
      sendMessage(selectedChatID, {
        sender: "You",
        content: `Meeting suggestion: ${meetingDate} at ${meetingTime}`,
        type: "meeting_suggestion",
        meetingDetails: {
          date: new Date(meetingDate),
          time: meetingTime,
        },
      });
      setShowMeetingForm(false);
      setMeetingDate("");
      setMeetingTime("");
    }
  };

  const handleSearchInChats = () => {
    const results = chats.flatMap((chat) =>
      chat.messages
        .filter((message) =>
          message.content.toLowerCase().includes(chatSearchQuery.toLowerCase())
        )
        .map((message) => ({
          chatId: chat.id,
          messageId: message.id,
          content: message.content,
          sender: message.sender,
          recipient:
            chat.participants.find((p) => p !== message.sender) || "Unknown",
        }))
    );
    setSearchResults(results);
    setIsSearchModalOpen(true);
  };

  const handleSearchResultClick = (chatId: string, messageId: string) => {
    setActiveChat(chatId);
    setIsSearchModalOpen(false);
    // TODO: Implement logic to scroll to the specific message
  };

  const filteredChats = chats.filter((chat) =>
    chat.participants.some((participant) =>
      participant.toLowerCase().includes(chatSearchQuery.toLowerCase())
    )
  );

  return (
    <ChatContainer>
      <Sidebar>
        <SearchInput
          placeholder="Search chats..."
          value={chatSearchQuery}
          onChange={(e) => setChatSearchQuery(e.target.value)}
        />

        <ChatList>
          {filteredChats.map((chat) => (
            <ChatItem
              key={chat.id}
              active={chat.id === selectedChatID}
              onClick={() => setActiveChat(chat.id)}
            >
              <Avatar
                src={`https://i.pravatar.cc/150?u=${chat.id}`}
                alt={chat.participants[0]}
              />
              {chat.participants.filter((name) => name !== "You").join(", ")}
            </ChatItem>
          ))}
          {chatSearchQuery?.length > 0 && (
            <SearchButton onClick={handleSearchInChats}>
              <Search size={20} />
              Search Messages
            </SearchButton>
          )}
        </ChatList>
      </Sidebar>
      <ChatWindow>
        <MessageList ref={messageListRef}>
          {selectedChatID &&
            chats
              .find((chat) => chat.id === selectedChatID)
              ?.messages.map((message) =>
                message.type === "meeting_suggestion" ? (
                  <MeetingSuggestion
                    key={message.id}
                    isSender={message.sender === "You"}
                    status={message.meetingDetails?.status}
                  >
                    <div>{message.content}</div>
                    <MeetingActions>
                      <ApproveButton
                        onClick={() =>
                          responseToMeetingInvitation(
                            selectedChatID,
                            message.id,
                            "approved"
                          )
                        }
                      >
                        Approve
                      </ApproveButton>
                      <RejectButton
                        onClick={() =>
                          responseToMeetingInvitation(
                            selectedChatID,
                            message.id,
                            "rejected"
                          )
                        }
                      >
                        Reject
                      </RejectButton>
                    </MeetingActions>
                  </MeetingSuggestion>
                ) : (
                  <MessageBubble
                    key={message.id}
                    isSender={message.sender === "You"}
                  >
                    <div>{message.content}</div>
                    <div>{format(message.timestamp, "HH:mm")}</div>
                  </MessageBubble>
                )
              )}
        </MessageList>
        <InputArea>
          <InputRow>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
            <ScheduleButton
              onClick={() => setShowMeetingForm(!showMeetingForm)}
            >
              {showMeetingForm ? "Cancel" : "Schedule Meeting"}
            </ScheduleButton>
          </InputRow>
          {showMeetingForm && (
            <InputRow>
              <Input
                type="date"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
              />
              <Input
                type="time"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
              />
              <SendButton onClick={handleSendMeetingSuggestion}>
                Send Meeting Suggestion
              </SendButton>
            </InputRow>
          )}
        </InputArea>
      </ChatWindow>
      <SearchInChatModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        searchResults={searchResults}
        onResultClick={handleSearchResultClick}
        searchQuery={chatSearchQuery}
      />
    </ChatContainer>
  );
};
