import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children, redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    return <Navigate to={redirectPath} replace />;
  };
  return children;
};

export default ProtectedRoute;