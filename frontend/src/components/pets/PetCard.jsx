import { Link } from "react-router-dom";

const PetCard = ({ pet }) => (
    <article className="relative border bg-transparent p-6 flex flex-col">
        <header className="border-b border-dark-green pb-3 mb-4">
            <p className="text-[10px] tracking-[0.2em] uppercase  mb-1">
                Питомец
            </p>
            <h4 className="text-3xl font-accent text-dark-green font-bold leading-none">
                {pet.name}
            </h4>
        </header>

        <div className="grid grid-cols-2 border-b border-dark-green mb-4">
            <div className="border-r border-dark-green pr-3 py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1">
                    Вид
                </p>
                <p className="text-sm">{pet.species}</p>
            </div>
            <div className="pl-3 py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1">
                    Возраст
                </p>
                <p className="text-sm">{pet.age} лет</p>
            </div>
        </div>

        <div className="grid grid-cols-1 border-dark-green border-b mb-4">
            <div className="py-3">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1">
                    Записей на прием
                </p>
                <p className="text-sm">{pet.appointments_count}</p>
            </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
            <Link
                to="/record"
                className="block text-center border border-ink text-xs tracking-[0.2em] uppercase py-2.5 transition hover:border-accent hover:text-accent">
                Записать на прием
            </Link>
        </div>
    </article>
);

export default PetCard;