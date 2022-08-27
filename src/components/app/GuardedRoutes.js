import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export const GuardedRoutePrivate = () => {
    const auth = Boolean(localStorage.getItem('user'));
    return auth ? <Outlet /> : <Navigate to="/login" />;
};
export const GuardedRouteLogin = () => {
    const auth = Boolean(localStorage.getItem('user'));
    return auth ?  <Navigate to="/react-chat" /> : <Outlet /> ;
};
