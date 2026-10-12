import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

import Main from "./pages/Main.jsx";
import Login from "./pages/Auth/Login.jsx";
import Registration from "./pages/Auth/Registration.jsx";
import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

import GuestRoute from "./components/routes/GuestRoute.jsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import RoleRoute from "./components/routes/RoleRoute.jsx";
import Pets from "./pages/Pets.jsx";
import PetCreate from "./pages/PetCreate.jsx";
import Appointments from "./pages/Appointments.jsx";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Main />} />

                        <Route element={<GuestRoute />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/registration" element={<Registration />} />
                        </Route>

                        <Route element={<ProtectedRoute />}>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/pets" element={<Pets />} />
                            <Route path="/pet/add" element={<PetCreate />} />
                            <Route path="/appointments" element={<Appointments />} />
                        </Route>

                        <Route element={<RoleRoute roles={["admin"]} />}>
                            <Route path="/admin" element={<AdminDashboard />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;