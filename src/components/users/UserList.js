import React from 'react'
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import { useHistory } from 'react-router';

const UserList = () => {
    const users = useSelector(state => state.userState.users);
    const history = useHistory();

    const handleCreateUser = () => {
        history.push('/user/create')
    }
    return ( 
        <div>
            <button onClick={handleCreateUser}>Add new User</button>
            {users.map(user => {
                return (
                    <UserItem key={user.id} user={user} />
                )
            })}
        </div>
     );
}
 
export default UserList;