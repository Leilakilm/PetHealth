import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Header = () => {
    const { isAuthenticated, isAdmin, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = (
        <>
            <Link to="/" className="hover:text-orange-600 transition py-2">
                Главная
            </Link>
            {isAdmin ? (
                <Link to="/admin/appointments" className="hover:text-orange-600 transition py-2">
                    Админ-панель
                </Link>
            ) : (
                <>
                    <Link to="/record" className="hover:text-orange-600 transition py-2">
                        Записаться
                    </Link>
                    <Link to="/appointments" className="hover:text-orange-600 transition py-2">
                        История болезни
                    </Link>
                    {isAuthenticated && (
                        <Link to="/pet/add" className="hover:text-orange-600 transition py-2">
                            Новый питомец
                        </Link>
                    )}
                </>
            )}
        </>
    );

    const authButtons = isAuthenticated ? (
        <>
            {!isAdmin && (
                <Link to="/pets" className="text-gray-800 hover:text-orange-600 transition py-2">
                    Питомцы
                </Link>
            )}
            <button
                onClick={logout}
                className="border-orange-600 text-orange-600 border-1 hover:text-slate-800 hover:bg-slate-800 px-3 py-2 transition w-full text-center">
                Выйти
            </button>
        </>
    ) : (
        <>
            <Link to="/login" className="text-gray-800 hover:text-orange-600 transition py-2 text-center">
                Вход
            </Link>
            <Link to="/registration" className="border-slate-800 border-1 hover:bg-orange-600 px-3 py-2 transition text-center mt-2">
                Регистрация
            </Link>
        </>
    );

    return (
        <header className=" text-slate-800 border-b-1 border-b-slate-500">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <Link to="/" className="font-accent text-2xl font-bold m-0 text-shadow-slate-800">
                    PetHealth
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
                    {navLinks}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    {authButtons}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    aria-label="Меню"
                    type="button">
                    <span className="block w-6 h-0.5 bg-slate-800"></span>
                    <span className="block w-6 h-0.5 bg-slate-800"></span>
                    <span className="block w-6 h-0.5 bg-slate-800"></span>
                </button>
            </div>

            <div
                className={`md:hidden w-full bg-slate-200 border-t border-slate-300 flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                    isOpen
                        ? "max-h-[500px] py-6 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                }`}>
                <nav className="flex flex-col text-lg font-medium text-gray-800">
                    {navLinks}
                </nav>
                <div className="flex flex-col border-t border-slate-300 pt-4 mt-2">
                    {authButtons}
                </div>
            </div>
        </header>
    );
};

export default Header;