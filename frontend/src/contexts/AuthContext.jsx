import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { request } from "../api/client.js";
import { ENDPOINTS } from "../constants/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const refresh = useCallback(async () => {
        setLoading(true);
        try {
            const data = await request(ENDPOINTS.AUTH.USER);
            setUser(data.user ?? data);
        } catch (err) {
            if (err.status === 401) {
                setUser(null);
            } else {
                console.error("Auth refresh failed:", err);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    const login = useCallback((userData) => {
        setUser(userData);
    }, []);

    const logout = useCallback(async () => {
        try {
            await request(ENDPOINTS.AUTH.LOGOUT, { method: "POST" });
        } catch {
        } finally {
            setUser(null);
        }
    }, []);

    const isAuthenticated = !!user;
    const isAdmin = user?.status === "admin";

    return (
        <AuthContext.Provider
            value={{ user, loading, isAuthenticated, isAdmin, login, logout, refresh }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuthContext must be used inside <AuthProvider>");
    return ctx;
};