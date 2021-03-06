import React from 'react';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../../slices/userSlice';
import { useHistory } from 'react-router';

import './User.css';

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = (user) => {
    dispatch(editUser(user));
    history.push('/user/update');
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    history.push('/');
  };
  return (
    <div className='user-card-container'>
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <div className='button-container'>
        <button onClick={() => handleEdit(user)}>Edit</button>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserItem;
