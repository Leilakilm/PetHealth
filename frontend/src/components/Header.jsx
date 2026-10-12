import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";

const Header = () => {
    const {user, isAuthenticated, logout} = useAuth();

    return (
        <header className="text-slate-800 border-b-1 border-b-slate-500">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold m-0 text-shadow-slate-800">
                    PetHealth
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
                    <Link to="/" className="hover:text-orange-600 transition">
                        Главная
                    </Link>
                    <Link to="/record" className="hover:text-orange-600 transition">
                        Записаться
                    </Link>
                    <Link to="/appointments" className="hover:text-orange-600 transition">
                        История болезни
                    </Link>
                    {isAuthenticated && (
                        <Link to="/pet/add" className="hover:text-orange-600 transition">
                            Новый питомец
                        </Link>
                    )}
                </nav>

                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/pets"
                                className="text-gray-800 hover:text-orange-600 transition"
                            >
                                Питомцы
                            </Link>
                            <button
                                onClick={logout}
                                className="border-orange-600 text-orange-600 border-1 hover:text-slate-800 hover:bg-slate-800 px-3 py-1 transition"
                            >
                                Выйти
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-800 hover:text-orange-600 transition"
                            >
                                Вход
                            </Link>
                            <Link
                                to="/registration"
                                className="border-slate-800 border-1 hover:bg-orange-600 px-3 py-1 transition"
                            >
                                Регистрация
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;