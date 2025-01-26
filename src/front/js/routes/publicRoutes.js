import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";



export const PublicRoutes = ({ user }) => {

    return !user ? < Outlet /> :
        <Navigate to ="/profileView" />


};