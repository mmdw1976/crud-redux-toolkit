import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm';
import UserList from './components/users/UserList';

const App = () => {
    return ( 
        <div>
        <h1>App</h1>
        <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/user/create" component={AddUserForm} />
            <Route path="/user/update" component={EditUserForm} /> 
        </Switch>
        </div>
     );
}
 
export default App;