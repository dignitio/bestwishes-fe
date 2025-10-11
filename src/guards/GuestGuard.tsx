import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
