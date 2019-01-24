import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const AuthenticatedRoute = ({ component: Component, login, ...rest }) => (
    <Route {...rest} render={props => (
        //Check login state
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

