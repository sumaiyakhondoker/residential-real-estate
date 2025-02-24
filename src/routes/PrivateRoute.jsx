import PropTypes from "prop-types";
import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {  FadeLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
   const {user,loading} = useAuth()
   const location = useLocation()
  //  console.log(location);
    if(loading){
      return <div className="min-h-screen flex justify-center items-center">
      <FadeLoader color="#00d5be"/>
      </div>
      
    }
    if(user){
        return children
    }
  
  return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
