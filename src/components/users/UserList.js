import React from 'react'
import { useSelector } from 'react-redux';
import UserItem from './UserItem';

const UserList = () => {
    const users = useSelector(state => state.userState.users);
    return ( 
        <div>
            {users.map(user => {
                return (
                    <UserItem key={user.id} user={user} />
                )
            })}
        </div>
     );
}
 
export default UserList;