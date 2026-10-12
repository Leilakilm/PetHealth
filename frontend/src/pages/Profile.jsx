import { useAuth } from "../hooks/useAuth.js";

const Profile = () => {
    const { user } = useAuth();

    return (
        <section>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Профиль</h1>
            <p className="text-slate-600">Имя: {user?.name}</p>
            <p className="text-slate-600">Email: {user?.email}</p>
            <p className="text-slate-600">Телефон: {user?.phone}</p>
        </section>
    );
};

export default Profile;