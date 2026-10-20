import Label from "../ui/Label.jsx";
import {Link} from "react-router-dom";

const CaringCard = () => {
    return (
        <article className="relative p-6 flex flex-col h-full border border-dark-green bg-cream text-ink">
            <header className="border-b border-dark-green pb-3 mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1 text-ink/70">
                    Врач
                </p>
                <h4 className="text-3xl font-accent text-dark-green font-bold leading-none m-0">
                    Александр Смирнов
                </h4>
            </header>

            <div className="grid grid-cols-2 border-b border-dark-green mb-4">
                <div className="border-r border-dark-green pr-3 py-3">
                    <Label>Специализация</Label>
                    <p className="text-sm">Хирург</p>
                </div>
                <div className="pl-3 py-3">
                    <Label>Стаж</Label>
                    <p className="text-sm">8 лет</p>
                </div>
            </div>

            <div className="grid grid-cols-1 border-dark-green border-b mb-4">
                <div className="py-3">
                    <Label>О специалисте</Label>
                    <p className="text-sm leading-relaxed">
                        Специализируется на сложных операциях и травмах опорно-двигательного аппарата. Имеет опыт работы с мелкими домашними животными.
                    </p>
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
    )
}
export default CaringCard