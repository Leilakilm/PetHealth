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
            <Link to="/" className="hover:text-accent transition py-2">
                Главная
            </Link>
            {isAdmin ? (
                <>
                    <Link to="/admin/appointments" className="hover:text-accent transition py-2">
                        Админ-панель
                    </Link>
                    <Link to="/admin/doctors" className="hover:text-accent transition py-2">
                        Специалисты
                    </Link>
                    <Link to="/admin/doctor/add" className="hover:text-accent transition py-2">
                        Регистрация специалиста
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/record" className="hover:text-accent transition py-2">
                        Записаться
                    </Link>
                    <Link to="/appointments" className="hover:text-accent transition py-2">
                        История болезни
                    </Link>
                    {isAuthenticated && (
                        <Link to="/pet/add" className="hover:text-accent transition py-2">
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
                <Link to="/pets" className=" hover:text-accent transition py-2">
                    Питомцы
                </Link>
            )}
            <button
                onClick={logout}
                className="border-dark-green text-dark-green border-1 hover:text-accent hover:border-accent  px-3 py-1 transition w-full text-center">
                Выйти
            </button>
        </>
    ) : (
        <>
            <Link to="/login" className=" hover:text-accent transition py-1 text-center">
                Вход
            </Link>
            <Link to="/registration" className="border-ink border-1 hover:text-accent hover:border-accent px-3 py-1 transition text-center">
                Регистрация
            </Link>
        </>
    );

    return (
        <header className="  border-b-1 border-b-ink">
            <div className="container mx-auto py-2 flex items-center justify-between">
                <Link to="/" className="font-accent hover:text-accent transition text-dark-green text-2xl font-bold m-0 ">
                    PetHealth
                </Link>

                <nav className="hidden md:flex items-center gap-6 font-medium">
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
                    <span className="block w-6 h-0.5 bg-ink"></span>
                    <span className="block w-6 h-0.5 bg-ink"></span>
                    <span className="block w-6 h-0.5 bg-ink"></span>
                </button>
            </div>

            <div
                className={`md:hidden w-full flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                    isOpen
                        ? "max-h-[500px] py-6 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                }`}>
                <nav className="flex flex-col text-lg font-medium ">
                    {navLinks}
                </nav>
                <div className="flex flex-col border-t border-cream pt-4 mt-2">
                    {authButtons}
                </div>
            </div>
        </header>
    );
};

export default Header;