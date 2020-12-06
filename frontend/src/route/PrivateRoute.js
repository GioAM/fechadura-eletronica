import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
    const isLogged = localStorage.getItem('logged')
    if(!isLogged || isLogged === "false"){
        return <Redirect to="/login"/>
    }
    return <Route { ... props }/>
}


export default PrivateRoute