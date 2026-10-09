const HowWorkBlock = () => {
    return (
        <section className="my-20 px-5 md:px-0">
            <h3 className="text-3xl font-bold m-0 text-slate-800 scroll-mt-10" id="howTtWorks">Как это работает<span
                className="text-orange-600">.</span>
            </h3>
            <p className="mt-2 mb-4 block text-sm w-full md:w-4/5 font-medium text-slate-500">Четыре простых шага от
                регистрации
                до приёма.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
                <div>
                    <p className="block text-sm w-full md:w-4/5 font-medium text-slate-500">Этот блок поможет вам
                        сориентироваться на сайте и понять, с чего начать. Здесь мы коротко показываем
                        весь путь от регистрации до записи на приём, чтобы вы заранее знали, какие шаги вас ждут. Вы
                        увидите, что процесс состоит из четырёх простых этапов и не требует специальных знаний. Каждый
                        шаг
                        сопровождается коротким пояснением, поэтому вы сразу поймёте, что именно нужно сделать.</p>
                </div>
                <div className="lg:mx-auto">
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <div className="flex flex-col items-center gap-2 ">
                            <a href=""
                               className="border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                1
                            </a>
                            <div
                                className=" w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href=""
                               className=" text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                2
                            </a>
                            <div className="w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href=""
                               className="text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                3
                            </a>
                            <div className="w-0.5 h-11 md:h-20 lg:h-11 bg-slate-800"></div>
                            <a href=""
                               className="text-slate-800 border-slate-800 border-2 font-bold px-4 py-2 rounded-sm hover:text-orange-600 hover:border-orange-600">
                                4
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-full border-1 border-slate-300 p-3">
                                <h3 className="text-lg font-bold m-0 text-slate-800 mb-1">Зарегистрируйтесь</h3>
                                <p className="text-slate-500 text-sm">Создайте аккаунт за минуту: почта и пароль.</p>
                            </div>
                            <div className="w-full border-1 border-slate-300 p-3">
                                <h3 className="text-lg font-bold m-0 text-slate-800 mb-1">Добавьте питомца</h3>
                                <p className="text-slate-500 text-sm">Укажите вид, породу, возраст — это поможет врачу
                                    подготовиться.</p>
                            </div>
                            <div className="w-full border-1 border-slate-300 p-3">
                                <h3 className="text-lg font-bold m-0 text-slate-800 mb-1">Выберите направление и
                                    врача</h3>
                                <p className="text-slate-500 text-sm">Терапия, стоматология, хирургия, дерматология и
                                    другие.</p>
                            </div>
                            <div className="w-full border-1 border-slate-300 p-3">
                                <h3 className="text-lg font-bold m-0 text-slate-800 mb-1">Запишитесь на удобное
                                    время</h3>
                                <p className="text-slate-500 text-sm">Слоты онлайн. Напомним о приёме заранее.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HowWorkBlock