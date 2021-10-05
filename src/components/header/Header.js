import React from 'react';
import { useHistory } from 'react-router';

import './Header.css';


const Header = () => {
    const history = useHistory();

    const handleCreateUser = () => {
        history.push('/user/create')
    }
    return ( 
        <header>
            <div className="header-bg"></div>
            <div className="header-content">
                <h1>My Users App</h1>
                <p>This app is created with React & React-redux-toolkit</p>
                <button onClick={handleCreateUser}>Add new User</button>
            </div>
        </header>
     );
}
 
export default Header;