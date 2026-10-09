import Hamster from "../assets/dots/Hamster.jsx";

const CaringBlock = () => {
    return (
        <section id="caring" className="my-20 px-5 md:px-0">
            <h3 className="text-3xl font-bold m-0 text-slate-800 scroll-mt-10">Забота без лишних хлопот<span
                className="text-orange-600">.</span></h3>
            <p className="mt-2 block text-sm w-full md:4/5 lg:w-1/3 font-medium text-slate-500">Мы собрали все, что
                важно
                при
                выборе ветеринара: опытных специалистов, честный подход и удобный сервис записи.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-800">01<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">Опытные врачи с подтверждённой
                            квалификацией</h3>
                        <p className="text-slate-500 text-sm">Каждый специалист проходит отбор и подтверждает свою
                            квалификацию.
                            Терапевты,
                            хирурги, стоматологи, дерматологи и другие узкие специалисты с опытом от 5
                            лет.</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className=" flex justify-between">
                        <p className="text-lg font-bold text-slate-800">02<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">Подбор врача по направлению</h3>
                        <p className="text-slate-500 text-sm">Вам не нужно разбираться, к кому идти. Достаточно выбрать
                            направление и система автоматически подберёт свободного специалиста с нужной
                            специализацией.</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-800">03<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">Запись онлайн без звонков и
                            очередей<span
                                className="text-orange-600">.</span></h3>
                        <p className="text-slate-500 text-sm">Записаться можно в любое время суток. Никаких звонков,
                            ожидания на
                            линии и утомительных разговоров, все занимает пару минут в личном кабинете.</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-800">04<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">История здоровья питомца в одном
                            месте</h3>
                        <p className="text-slate-500 text-sm">Каждый специалист проходит отбор и подтверждает свою
                            квалификацию.
                            Все приёмы, назначения, результаты анализов и документы хранятся в карточке питомца. Врач
                            видит полную картину, а вы не теряете важное.</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-800">05<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">Современное оборудование и
                            диагностика</h3>
                        <p className="text-slate-500 text-sm">Мы используем актуальные методы диагностики и лечения,
                            чтобы
                            поставить точный диагноз и не назначать лишнего.</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-25 justify-between border-1 border-slate-300">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-slate-800">06<span className="text-orange-600">.</span></p>
                        <a href="" className="rounded-sm border-1 brder-orange-600 py-0 px-2 text-orange-600">
                            =
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-slate-800 mb-2">Забота без стресса для питомца</h3>
                        <p className="text-slate-500 text-sm">Спокойная атмосфера, приём без долгих ожиданий и
                            внимательное
                            отношение к каждому животному — от кошки до экзотического питомца.</p>
                    </div>
                </div>
                <div></div>
                <Hamster/>
            </div>
        </section>
    )
}
export default CaringBlock