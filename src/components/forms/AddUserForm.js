import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addUser } from '../../slices/userSlice';
import { useHistory } from 'react-router';

import './Form.css';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialUser = { id: null, name: '', username: '' };

  const [user, setUser] = useState(initialUser);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value, id: uuid() });
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser(initialUser);
    history.push('/');
  };

  return (
    <div className='form-container'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          name='name'
          id='name'
          value={user.name}
          onChange={handleInput}
        />
        <br />
        <label htmlFor='username'>Username</label>
        <br />
        <input
          type='text'
          name='username'
          id='username'
          value={user.username}
          onChange={handleInput}
        />
        <br />
        <div className='button-container'>
          <button>Add new User</button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
