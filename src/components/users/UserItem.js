import React from 'react';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../../slices/userSlice';

const UserItem = ({user}) => {
    const dispatch = useDispatch();
    return ( 
        <div className="user-card-container">
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <button onClick={() => dispatch(editUser(user))}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
        </div>
     );
}
 
export default UserItem;