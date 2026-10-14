import { Link } from "react-router-dom";

const PetCard = ({ pet }) => (
    <article className="relative border border-slate-800 bg-transparent text-slate-800 p-6 flex flex-col">
        <header className="border-b border-slate-300 pb-3 mb-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                Питомец
            </p>
            <h4 className="text-3xl font-serif leading-none text-slate-800">
                {pet.name}
            </h4>
        </header>

        <div className="grid grid-cols-2 border-b border-slate-300 mb-4">
            <div className="border-r border-slate-300 pr-3 py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Вид
                </p>
                <p className="text-sm text-slate-700">{pet.species}</p>
            </div>
            <div className="pl-3 py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Возраст
                </p>
                <p className="text-sm text-slate-700">{pet.age} лет</p>
            </div>
        </div>

        <div className="grid grid-cols-1 border-b border-slate-300 mb-4">
            <div className="py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                    Записей на прием
                </p>
                <p className="text-sm text-slate-700">{pet.appointments_count}</p>
            </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
            <Link
                to="/record"
                className="block text-center border border-slate-800 text-slate-800 text-xs tracking-[0.2em] uppercase py-2.5 transition hover:bg-slate-800 hover:text-white">
                Записать на прием
            </Link>
        </div>
    </article>
);

export default PetCard;