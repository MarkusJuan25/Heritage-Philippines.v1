import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isLoggedIn, ready } = useAuth();

  if (!ready) {
    return null;
  }

  return isLoggedIn ? children : <Navigate to="/" replace state={{ from: location }} />;
}
