import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="text-center py-40">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
        <p className="text-slate-500">Страница не найдена</p>
        <Link to="/" className="text-orange-600 underline">
            На главную
        </Link>
    </div>
);

export default NotFound;