import React, {useEffect} from "react";
import {Route, Redirect} from 'react-router-dom'


interface PrivateRouteProps {
    component: React.FC;
    path: string;
    exact?: boolean;
}


function PrivateRoute({component, path, exact, ...rest}: PrivateRouteProps) {

    const checkForAuth = (): boolean => {
        var token = localStorage.getItem('token');
        console.log("the token is: " + token);
        console.log(token != null);
        return (token != null && token != "");
    }
    

  return checkForAuth() ? (<Route path={path} component={component} exact={exact} {...rest} />)
    : (<Redirect to="/" />);
}


export default PrivateRoute;
