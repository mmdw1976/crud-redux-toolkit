import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: false,
    currentUser: null,
    users: [
        {
            name: 'Mario',
            username: 'power',
            id: 1
        },
        {
            name: 'Stefano',
            username: 'BraveTear',
            id: 2
        }
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;