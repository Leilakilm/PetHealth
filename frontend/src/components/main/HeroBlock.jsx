const HeroBlock = () => {
    return (
        <section id="hero">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
                <div className={"border-1 border-transparent border-b-ink pb-4"}>
                    <h6 className={"text-ink/80 text-sm uppercase"}><span
                        className={"text-accent/100"}>{"{ 01 }"}</span> Направление</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold "}>Ветеринарная помощь</h5>
                        <p className={" text-sm"}>Приём в клинике и онлайн-запись.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-ink pb-4"}>
                    <h6 className={"text-ink/80 text-sm uppercase"}><span
                        className={"text-accent/100"}>{"{ 02 }"}</span> Запись</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold "}>Онлайн без звонков</h5>
                        <p className={" text-sm"}>Управление записями в кабинете.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-ink pb-4"}>
                    <h6 className={"text-ink/80 text-sm uppercase"}><span
                        className={"text-accent/100"}>{"{ 03 }"}</span> Сейчас</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold "}>Открыт приём на 2026</h5>
                        <p className={" text-sm"}>Свободные слоты на этой неделе.</p>
                    </div>
                </div>
                <div className={"border-1 border-transparent border-b-ink pb-4"}>
                    <h6 className={"text-ink/80 text-sm uppercase"}><span
                        className={"text-accent/100"}>{"{ 04 }"}</span> История питомцев с 2018</h6>
                    <div className={"mt-3"}>
                        <h5 className={"font-semibold "}>Онлайн без звонков</h5>
                        <p className={" text-sm"}>Все приёмы, назначения и документы.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10 items-stretch">
                <div
                    className="col-span-1 md:col-span-2 flex flex-col border-1 border-transparent md:pb-10 md:border-b-ink justify-between h-full">
                    <p className="text-[10px] tracking-[0.3em] uppercase font-bold  mb-2">Главная</p>
                    <div>
                        <h3 className="font-accent font-bold text-3xl md:text-5xl leading-tight text-dark-green m-0  lg:w-4/5">Ветеринар
                            рядом с вами<span
                                className="text-accent">.</span> Онлайн-запись
                            <br/> за 2 минуты</h3>
                        <p className="mt-2 block text-md w-full md:w-2/3   leading-relaxed">Зарегистрируйте
                            питомца, выберите направление и удобное время. Без звонков, очередей и лишнего стресса —
                            ни для вас, ни для хвостика.</p>
                    </div>
                </div>
                <div
                    className="col-span-1 border-1 border-transparent md:pb-10 md:border-b-ink h-full flex flex-col">
                    <p className="block text-sm font-bold text-dark-green">01<span className={"text-accent"}>.</span>
                    </p>
                    <h3 className="text-lg font-bold m-0 text-dark-green">История</h3>
                    <div className="flex flex-col gap-4 mt-2">
                        <p className="block text-sm w-full md:w-2/3  ">Так появился
                            онлайн-сервис, объединивший врачей, направления и владельцев в одном месте. Здесь можно
                            зарегистрировать питомца, выбрать специалиста и удобное время, а также хранить историю
                            приёмов
                            и
                            назначений.</p>
                        <p className="block text-sm w-full md:w-2/3  ">Так появился
                            онлайн-сервис, объединивший врачей и владельцев в одном месте. Здесь можно
                            зарегистрировать
                            питомца,
                            выбрать специалиста и время, а также хранить историю приёмов.</p>
                        <p className="block text-sm w-full md:w-2/3  ">Мы продолжаем
                            развивать
                            сервис,
                            чтобы
                            забота о питомцах оставалась простой и доступной.</p>
                    </div>
                </div>
                <div className="col-span-1 border-1 border-transparent pb-10 border-b-ink h-full">
                    <div className="flex flex-col gap-4 justify-between h-full">
                        <div>
                            <p className="block text-sm font-bold text-dark-green">02<span
                                className={"text-accent"}>.</span></p>
                            <h3 className="text-lg font-bold m-0 text-dark-green">Миссия</h3>
                            <p className="mt-2 block text-sm w-full md:w-2/3  ">Мы делаем
                                заботу
                                о
                                питомцах простой и доступной. Помогаем владельцам быстро находить специалиста и
                                записываться
                                на приём, а врачам сосредоточиться на здоровье животных.</p>
                        </div>
                        <div className="mt-auto">
                            <p className="block text-sm font-bold text-dark-green">03<span
                                className={"text-accent"}>.</span></p>
                            <h3 className="text-lg font-bold m-0 text-dark-green">Вкладки</h3>
                            <div className="w-full flex flex-col gap-3 mt-2">
                                <a href="#history"
                                   className="w-full block py-2 border-1 text-sm border-cream  hover:text-accent hover:border-b-accent border-b-ink transition">История</a>
                                <a href="#doctors"
                                   className="w-full block py-2 border-1 text-sm border-cream  hover:text-accent hover:border-b-accent border-b-ink transition">Наши
                                    специалисты</a>
                                <a href="#admissionDirections"
                                   className="w-full block py-2 border-1 text-sm border-cream  hover:text-accent hover:border-b-accent border-b-ink transition">Направления
                                    приема</a>
                                <a href="#contacts"
                                   className="w-full block py-2 border-1 text-sm border-cream  hover:text-accent hover:border-b-accent border-b-ink transition">Контакты</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id={"history"}>
                <div className="w-full mb-10">
                    <div className="flex justify-between items-center border-b border-line py-4">
                        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Из истории</span>
                    </div>
                    <div
                        className="border-b border-line py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group cursor-pointer hover:bg-paper transition-colors duration-300">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-lg font-bold  m-0 transition-colors">01<span
                                className={"text-accent"}>.</span> Как появился
                                сервис</h4>
                            <p className="text-sm mt-1">Объединили врачей, направления и владельцев.</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-between items-center">
                            <p className="text-sm text-ink/80 leading-relaxed max-w-md">
                                Здесь можно зарегистрировать питомца, выбрать специалиста и удобное время, а также
                                хранить
                                историю приёмов и назначений.
                            </p>
                            <span
                                className="text-xl font-semibold text-accent ml-4 group-hover:rotate-45 transition-transform duration-300">+</span>
                        </div>
                    </div>
                    <div
                        className="border-b border-line py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group cursor-pointer hover:bg-paper transition-colors duration-300">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-lg font-bold  m-0  transition-colors">02<span
                                className={"text-accent"}>.</span> Почему это просто</h4>
                            <p className="text-sm  mt-1">Помогаем быстро находить специалиста.</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-between items-center">
                            <p className="text-sm text-ink/80 leading-relaxed max-w-md">
                                Мы делаем заботу о питомцах простой и доступной. Врачам даем возможность сосредоточиться
                                на
                                здоровье животных.
                            </p>
                            <span
                                className="text-xl font-semibold text-accent ml-4 group-hover:rotate-45 transition-transform duration-300">+</span>
                        </div>
                    </div>
                    <div
                        className="border-b border-line py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group cursor-pointer hover:bg-paper transition-colors duration-300">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-lg font-bold  m-0  transition-colors">03<span
                                className={"text-accent"}>.</span> Как мы работаем</h4>
                            <p className="text-sm  mt-1">Все приёмы и документы в одном месте.</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-between items-center">
                            <p className="text-sm text-ink/80 leading-relaxed max-w-md">
                                Мы продолжаем развивать сервис, чтобы забота о питомцах оставалась простой и доступной.
                            </p>
                            <span
                                className="text-xl font-semibold ml-4 text-accent  group-hover:rotate-45 transition-transform duration-300">+</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border border-line">
                    <div
                        className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-line bg-paper">
                    <pre className="text-accent flex items-center justify-center">
                        {`૮ • ﻌ - ა⁩`}
                    </pre>
                    </div>
                    <div
                        className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-line bg-paper">
                        <div className="flex gap-2 justify-items-center">
                            <a href={"#"}
                               className="rounded-full flex justify-center hover:text-accent uppercase text-xs">TG</a>
                            <a href={"#"}
                               className="rounded-full flex justify-center hover:text-accent uppercase text-xs">instagram</a>
                            <a href={"#"}
                               className="rounded-full flex justify-center hover:text-accent uppercase text-xs">VK</a>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center bg-paper">
                        <h4 className="text-sm font-semibold mb-2"></h4>
                        <pre className=" flex flex-col text-accent gap-1 text-center">
                        {`(•˕ •マ╮ᕤ`}
                    </pre>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default HeroBlock