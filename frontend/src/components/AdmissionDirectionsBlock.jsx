import Hummingbird from "../assets/dots/Hummingbird.jsx";

const AdmissionDirectionsBlock = () => {
    return (
        <div className="my-20 px-5 md:px-0">
            <h3 className="text-3xl font-bold m-0 text-slate-800 scroll-mt-10" id="admissionDirections">Направления
                приема<span className="text-orange-600">.</span>
            </h3>
            <p className="mb-4 mt-2 block text-sm w-full md:w-4/5 font-medium text-slate-500">Все направления
                ветеринарной
                помощи в одном месте.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <p className="block text-sm w-full md:w-4/5 font-medium text-slate-500">Здоровье питомца
                                может
                                потребовать помощи разных специалистов, и не всегда легко понять, к кому обратиться в
                                конкретной
                                ситуации. Кто-то замечает, что животное стало вялым или отказывается от еды, кто-то
                                планирует
                                плановую прививку, а кому-то нужен узкий врач по уже известному диагнозу.</p>
                        </div>
                        <Hummingbird />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div
                        className="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">01<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Терапия</h6>
                        <p className="">Осмотр, диагностика, назначения и общее наблюдение за состоянием питомца.</p>
                    </div>
                    <div
                        className="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">02<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Вакцинация</h6>
                        <p className="">Плановые прививки, ревакцинация и подбор индивидуального графика.</p>
                    </div>
                    <div
                        className="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">03<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Стоматология</h6>
                        <p className="">Чистка зубов, удаление зубного камня и лечение заболеваний полости рта.</p>
                    </div>
                    <div
                        className="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">04<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Хирургия</h6>
                        <p className="">Плановые и срочные операции, стерилизация и послеоперационное наблюдение.</p>
                    </div>
                    <div
                        className="border-1 border-transparent border-t-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">05<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Дерматология</h6>
                        <p className="">Диагностика и лечение кожных заболеваний, аллергий и выпадения шерсти.</p>
                    </div>
                    <div
                        className="border-1 border-transparent border-y-slate-800 py-3 grid grid-cols-[auto_1fr_1fr] gap-1 md:gap-2 lg:gap-10">
                        <h6 className="font-bold text-slate-800">06<span className="text-orange-600">.</span></h6>
                        <h6 className="font-bold text-slate-800">Офтальмология</h6>
                        <p className="">Осмотр глаз, лечение воспалений и подбор терапии при нарушениях зрения.</p>
                    </div>
                    <p className="block text-sm w-full md:w-4/5 font-medium text-slate-500">Это лишь часть направлений,
                        с
                        которыми работают наши специалисты. Полный список доступен на странице записи на приём, где вы
                        сможете выбрать нужное направление и сразу подобрать свободного врача.</p>
                </div>
            </div>
        </div>
    )
}
export default AdmissionDirectionsBlock