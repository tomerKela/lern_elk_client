import { create } from 'zustand'



interface UserDetails {
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    language: string;
}

interface UserDetailsState {
    userDetails: UserDetails
    setUserDetails: (userDetails: UserDetails) => void
}

export const useUserDetailsState = create<UserDetailsState>((set) => ({
    userDetails: {
        email: '',
        password: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        country: '',
        language: ''
    },
    setUserDetails: (userDetails: UserDetails) => set({userDetails}),
}))


