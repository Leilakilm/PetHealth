const Footer = () => {
    return (
        <footer className="border-1 border-t-slate-800 border-transparent text-slate-800 text-sm">
            <div className="container mx-auto py-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <a href="{{ route('home.index') }}" className="inline-flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight">PetHealth</span>
                    </a>
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
                            <li><a href=""
                                   className="hover:text-orange-500 transition">Главная</a></li>
                            <li><a href=""
                                   className="hover:text-orange-500 transition">Записаться</a>
                            </li>
                            <li><a href="" className="hover:text-orange-500 transition">История
                                болезни</a></li>
                            <li><a href="" className="hover:text-orange-500 transition">Зарегистрировать
                                питомца</a></li>
                            <li><a href="" className="hover:text-orange-500 transition">Мои
                                питомцы</a></li>
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