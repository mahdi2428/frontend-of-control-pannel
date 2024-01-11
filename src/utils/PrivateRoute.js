// import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Outlet, Navigate } from 'react-router-dom'
export const ProtectedRoute = () => {
  const {user}  = useAuth();
  // console.log(user.username)
  return (
    user ? <Outlet/> : <Navigate to={'/nopermission'} />
  )
  
};