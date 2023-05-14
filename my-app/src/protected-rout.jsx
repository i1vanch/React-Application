import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children, redirectPath = "/"}){
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath}/> ;
  };
  return children;
};

export default ProtectedRoute;