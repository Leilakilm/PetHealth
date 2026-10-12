import { Link } from "react-router-dom";

const PetCard = ({ pet }) => (
    <div className="lg:gap-10 border-1 p-4 border-slate-600">
        <div>
            <div>
                <p className="text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">
                    Питомец
                </p>
                <h4 className="text-slate-800 text-xl font-bold">{pet.name}</h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <div className="my-3">
                        <p className="font-semibold block text-sm text-slate-800 mb-1">Вид:</p>
                        <p className="text-slate-500">{pet.species}</p>
                    </div>
                    <div className="my-3">
                        <p className="font-semibold block text-sm text-slate-800 mb-1">Возраст:</p>
                        <p className="text-slate-500">{pet.age} лет</p>
                    </div>
                </div>

                <div>
                    <div className="my-3">
                        <Link
                            to="/record"
                            className="font-semibold block text-sm text-orange-600 underline"
                        >
                            Записать на приём
                        </Link>
                    </div>
                    <div className="my-3">
                        <p className="font-semibold block text-sm text-slate-800 mb-1">
                            Записей на приём:
                        </p>
                        <p className="text-slate-500">{pet.appointments_count}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PetCard;