import { Navigate, Outlet } from "react-router-dom";
import { useUsername } from "@/contexts/username/useUsername";

export function ProtectedRoutes() {
  const { username } = useUsername();

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
