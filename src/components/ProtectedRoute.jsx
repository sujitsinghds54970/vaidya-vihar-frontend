import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

function ProtectedRoute({ children, allowedRoles }) {
  const role = getUserRole();

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;