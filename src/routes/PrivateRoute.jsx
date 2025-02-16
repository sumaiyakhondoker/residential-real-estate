import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // const navigate = useNavigate()
    const user = true
    if(user){
        return children
    }
  
  return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
