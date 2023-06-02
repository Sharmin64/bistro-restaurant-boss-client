import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth();

  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <progress className="progress w-56 justify-center items-center mt-96 mx-auto"></progress>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;

//?for test
//!import { useContext } from "react";
//!import { AuthContext } from "../providers/AuthProvider";
//!import { Navigate, useLocation } from "react-router";

//!const PrivateRoute = ({ children }) => {
//!   const { user, loading } = useContext(AuthContext);
//!   const location = useLocation();

//!   if(loading){
//?       return <progress className="progress w-56"></progress>
//?   }

// ?   if (user) {
//  ?      return children;
//   ? }
//    ?return <Navigate to="/login" state={{from: location}} replace></Navigate>
//};

//?export default PrivateRoute;
