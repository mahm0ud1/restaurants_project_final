import { createSlice } from '@reduxjs/toolkit'
import UserInfoInterface from '../interfaces/UserInfoInterface';

export interface UserState {
    userData: UserInfoInterface|undefined;
    isAdmin: Boolean;
    isLoggedIn: Boolean;
}

const initialState: UserState = {
    userData: undefined,
    isAdmin: false,
    isLoggedIn: false
};

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUserInfo: (state, actions) => {
            state.userData = actions.payload;
            if(state.userData !== undefined) {
                state.isAdmin = (state.userData.role === "admin")
                state.isLoggedIn = true;
            }
            else {
                state.isAdmin = false;
                state.isLoggedIn = false;
            }
        },
        setIsAdmin: (state, actions) => {
            state.isAdmin = actions.payload;
        },
        setIsLoggedIn: (state, actions) => {
            state.isLoggedIn = actions.payload;
        },
    },
})

const { actions, reducer } = UserSlice;

export const {setUserInfo, setIsAdmin, setIsLoggedIn} = actions;
export const userReducer = reducer;