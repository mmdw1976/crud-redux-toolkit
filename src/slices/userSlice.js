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
        addUser: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        },
        editUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
                edit: true
            }
        },
        cancelEdit: state => {
            return {
                ...state,
                currentUser: null,
                edit: false
            }
        },
        updateUser: (state, action) => {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }
                    return user;
                }),
                currentUser: null,
                edit: false
            }
        },
        deleteUser: (state, action) => {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload);
            }
        }
    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;