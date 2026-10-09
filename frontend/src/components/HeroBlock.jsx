const HeroBlock = () => {
    return (
        <section id="hero">
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
                <div className={"border-1 border-transparent border-b-slate-300 pb-4"}>
                    <h6 className={"text-slate-500 text-sm uppercase"}>{"{ 01 }"} Направление</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold text-slate-800"}>Ветеринарная помощь</h5>
                        <p className={"text-slate-500 text-sm"}>Приём в клинике и онлайн-запись.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-slate-300 pb-4"}>
                    <h6 className={"text-slate-500 text-sm uppercase"}>{"{ 02 }"} Запись</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold text-slate-800"}>Онлайн без звонков</h5>
                        <p className={"text-slate-500 text-sm"}>Управление записями в кабинете.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-slate-300 pb-4"}>
                    <h6 className={"text-slate-500 text-sm uppercase"}>{"{ 03 }"} Сейчас</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold text-slate-800"}>Открыт приём на 2026</h5>
                        <p className={"text-slate-500 text-sm"}>Свободные слоты на этой неделе.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-slate-300 pb-4"}>
                    <h6 className={"text-slate-500 text-sm uppercase"}>{"{ 04 }"} История питомцев с 2018</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold text-slate-800"}>Онлайн без звонков</h5>
                        <p className={"text-slate-500 text-sm"}>Все приёмы, назначения и документы.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10 items-stretch">
                <div
                    className="col-span-1 md:col-span-2 flex flex-col border-1 border-transparent md:pb-10 md:border-b-slate-500 justify-between h-full">
                    <p className="pb-2 block text-sm font-medium text-slate-800">Главная</p>
                    <div>
                        <h3 className="text-5xl font-bold m-0 text-slate-800 lg:w-4/5">Ветеринар рядом с вами<span
                            className="text-orange-600">.</span> Онлайн-запись
                            <br/> за 2
                            минуты</h3>
                        <p className="mt-2 block text-lg w-full md:w-2/3 font-medium text-slate-500">Зарегистрируйте
                            питомца, выберите направление и удобное время. Без звонков, очередей и лишнего стресса —
                            ни
                            для
                            вас, ни для хвостика.</p>
                    </div>
                </div>
                <div
                    className="col-span-1 border-1 border-transparent md:pb-10 md:border-b-slate-500 h-full flex flex-col">
                    <p className="block text-sm font-medium text-orange-600">01</p>
                    <h3 className="text-lg font-bold m-0 text-slate-800">История</h3>
                    <div className="flex flex-col gap-4 mt-2">
                        <p className="block text-sm w-full md:w-2/3 font-medium text-slate-500">Так появился
                            онлайн-сервис, объединивший врачей, направления и владельцев в одном месте. Здесь можно
                            зарегистрировать питомца, выбрать специалиста и удобное время, а также хранить историю
                            приёмов
                            и
                            назначений.</p>
                        <p className="block text-sm w-full md:w-2/3 font-medium text-slate-500">Так появился
                            онлайн-сервис, объединивший врачей и владельцев в одном месте. Здесь можно
                            зарегистрировать
                            питомца,
                            выбрать специалиста и время, а также хранить историю приёмов.</p>
                        <p className="block text-sm w-full md:w-2/3 font-medium text-slate-500">Мы продолжаем
                            развивать
                            сервис,
                            чтобы
                            забота о питомцах оставалась простой и доступной.</p>
                    </div>
                </div>
                <div className="col-span-1 border-1 border-transparent pb-10 border-b-slate-500 h-full">
                    <div className="flex flex-col gap-4 justify-between h-full">
                        <div>
                            <p className="block text-sm font-medium text-orange-600">02</p>
                            <h3 className="text-lg font-bold m-0 text-slate-800">Миссия</h3>
                            <p className="mt-2 block text-sm w-full md:w-2/3 font-medium text-slate-500">Мы делаем
                                заботу
                                о
                                питомцах простой и доступной. Помогаем владельцам быстро находить специалиста и
                                записываться
                                на приём, а врачам сосредоточиться на здоровье животных.</p>
                        </div>
                        <div className="mt-auto">
                            <p className="block text-sm font-medium text-orange-600">03</p>
                            <h3 className="text-lg font-bold m-0 text-slate-800">Вкладки</h3>
                            <div className="w-full flex flex-col gap-3">
                                <a href="#caring"
                                   className="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Забота
                                    без лишних хлопот</a>
                                <a href="#howTtWorks"
                                   className="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Как
                                    это работает</a>
                                <a href="#admissionDirections"
                                   className="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Направления
                                    приема</a>
                                <a href="#"
                                   className="w-full block py-1 border-1 border-slate-200 text-slate-500 hover:text-orange-600 hover:border-b-orange-600 border-b-slate-500 transition">Наши
                                    врачи</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroBlock