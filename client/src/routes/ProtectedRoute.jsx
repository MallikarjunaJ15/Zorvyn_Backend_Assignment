// routes/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user, isAuthChecked } = useSelector((store) => store.auth);
  if (!isAuthChecked) {
    return <div className="text-white">Checking auth...</div>;
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
