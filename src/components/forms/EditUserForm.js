import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelEdit, updateUser } from '../../slices/userSlice';
import { useHistory } from 'react-router';

const EditUserForm = () => {
  const [user, setUser] = useState(
    useSelector((state) => state.userState.currentUser)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleCancel = () => {
    dispatch(cancelEdit());

    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(user));
    history.push('/');
  };

  return (
    <div className='form-container'>
      <h2>Edit User</h2>
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
          <button>Update</button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
