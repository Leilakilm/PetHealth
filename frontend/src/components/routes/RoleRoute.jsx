import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import Loader from "../ui/Loader.jsx";

const RoleRoute = ({ roles = [] }) => {
    const { user, loading } = useAuth();

    if (loading) return <Loader />;

    if (!user) return <Navigate to="/login" replace />;

    if (roles.length && !roles.includes(user.status)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default RoleRoute;