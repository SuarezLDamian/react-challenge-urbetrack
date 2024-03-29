import { Navigate, Outlet } from "react-router-dom";
import useUserSession from "@store/userSession";

const AnonymousRoute = () => {

  const { username } = useUserSession();

  return (
    username ?
      <Navigate to="/" replace />
      :
      <Outlet />
  );
};

export default AnonymousRoute;