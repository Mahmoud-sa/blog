import {configureStore} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:"auth",
    initialsate:{"isLoggeIn":false},
    reducers: {
        login(state) {
            state.isLoggeIn = true
        },
        logout(state) {
            state.isLoggeIn = false

        },
    }
});

export  const authaction =  authSlice.actions  



export  const Store = configureStore(
    {
        reducer:authSlice.reducer
    }
    
)



