import { Navigate, Outlet } from "react-router-dom";
import useUserSession from "@store/userSession";

const ProtectedRoute = () => {

  const { username } = useUserSession();

  return (
    username ?
      <Outlet />
      :
      <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;