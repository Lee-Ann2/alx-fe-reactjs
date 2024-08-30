import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let useAuth = { token: true };
  return useAuth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;