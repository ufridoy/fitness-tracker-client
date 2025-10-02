import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";


const TrainerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user || role !== "trainer") {
    return <Navigate to="/forbidden" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default TrainerRoute;
