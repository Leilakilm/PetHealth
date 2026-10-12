import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import Loader from "../ui/Loader.jsx";

const GuestRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <Loader />;

    if (isAuthenticated) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default GuestRoute;