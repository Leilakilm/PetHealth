import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-1 border-t-slate-800 border-transparent text-slate-800 text-sm">
            <div className="container mx-auto py-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <Link to="/" className="inline-flex items-center gap-2">
                        <span className="font-serif font-bold text-xl tracking-tight">PetHealth</span>
                    </Link>
                </div>

                <div className="grid py-4 grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h3 className="font-semibold uppercase">Компания</h3>
                        <hr className="bg-slate-800 my-2"/>
                        <ul className="space-y-3">
                            <p className="text-sm text-slate-500">Современная ветеринарная клиника, где опытные врачи,
                                передовое оборудование и искренняя любовь к
                                животным помогают заботиться о здоровье питомцев на каждом этапе их жизни.</p>
                            <li><a href="#hero" className="hover:text-orange-500 transition">О нас</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="font-semibold uppercase">Сервис</h3>
                        <hr className="bg-slate-800 my-2"/>
                        <ul className="space-y-3">
                            <li><Link to="/"
                                   className="hover:text-orange-500 transition">Главная</Link></li>
                            <li><Link to="/record"
                                   className="hover:text-orange-500 transition">Записаться</Link>
                            </li>
                            <li><Link to="/appointments" className="hover:text-orange-500 transition">История
                                болезни</Link></li>
                            <li><Link to="/pet/add" className="hover:text-orange-500 transition">Зарегистрировать
                                питомца</Link></li>
                            <li><Link to="/pets" className="hover:text-orange-500 transition">Мои
                                питомцы</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="font-semibold uppercase">Контакты</h3>
                        <hr className="bg-slate-800 my-2"/>
                        <address className="not-italic space-y-2 leading-relaxed">
                            <p>
                                г. Москва, ул. Примерная, 1<br/>
                                Россия
                            </p>
                            <p>
                                <a href="mailto:info@pethealth.ru" className="hover:text-orange-500 transition">
                                    info@pethealth.ru
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer