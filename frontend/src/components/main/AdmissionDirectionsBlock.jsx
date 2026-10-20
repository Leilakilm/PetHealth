import Hummingbird from "../../assets/dots/Hummingbird.jsx";

const AdmissionDirectionsBlock = () => {
    const directions = [{
        id: "01",
        title: "Терапия",
        subtitle: "Общее наблюдение за состоянием питомца.",
        desc: "Осмотр, диагностика, назначения и общее наблюдение за состоянием питомца. Мы поможем, если животное стало вялым или отказывается от еды."
    }, {
        id: "02",
        title: "Вакцинация",
        subtitle: "Плановые прививки и ревакцинация.",
        desc: "Плановые прививки, ревакцинация и подбор индивидуального графика. Защитим вашего питомца от опасных заболеваний."
    }, {
        id: "03",
        title: "Стоматология",
        subtitle: "Здоровье зубов и полости рта.",
        desc: "Чистка зубов, удаление зубного камня и лечение заболеваний полости рта. Профессиональный уход за зубами животного."
    }, {
        id: "04",
        title: "Хирургия",
        subtitle: "Плановые и срочные операции.",
        desc: "Плановые и срочные операции, стерилизация и послеоперационное наблюдение. Современное оборудование и опытные хирурги."
    }, {
        id: "05",
        title: "Дерматология",
        subtitle: "Кожные заболевания и аллергии.",
        desc: "Диагностика и лечение кожных заболеваний, аллергий и выпадения шерсти. Подберем правильную терапию."
    }, {
        id: "06",
        title: "Офтальмология",
        subtitle: "Зрение и здоровье глаз.",
        desc: "Осмотр глаз, лечение воспалений и подбор терапии при нарушениях зрения. Бережный подход к здоровью глаз."
    },];

    return (<div className="mt-10 md:px-0 w-full" id="admissionDirections">
            <div className="flex justify-between items-center border-b border-line mb-4 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Все в одном месте</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:gap-12">
                <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                        <h3 className="font-accent text-3xl mb-2 font-bold m-0 scroll-mt-10">
                            Направления приема<span className={"text-accent"}>.</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-ink/80">
                            Здоровье питомца может потребовать помощи разных специалистов, и не всегда легко понять, к кому
                            обратиться в конкретной ситуации. Кто-то замечает, что животное стало вялым, кто-то планирует
                            плановую прививку, а кому-то нужен узкий врач по уже известному диагнозу.
                        </p>
                    </div>
                    <Hummingbird/>
                </div>

                <div className="lg:col-span-8 flex flex-col">
                    {directions.map((dir) => (<div
                        key={dir.id}
                        className="border-b border-ink/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 group cursor-pointer  transition-colors duration-300 pt-6">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-lg font-bold text-dark-green m-0 transition-colors">
                                {dir.id}<span className={"text-accent"}>.</span> {dir.title}
                            </h4>
                            <p className="text-sm text-ink mt-1">
                                {dir.subtitle}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-between items-center">
                            <p className="text-sm text-ink/80 leading-relaxed max-w-md">
                                {dir.desc}
                            </p>
                            <span
                                className="text-xl font-semibold ml-4 text-accent group-hover:rotate-45 transition-all duration-300">
                                    +
                                </span>
                        </div>
                    </div>))}

                    <div className="mt-4">
                        <p className="text-sm text-ink/80 leading-relaxed md:w-4/5">
                            Это лишь часть направлений, с которыми работают наши специалисты. Полный список доступен на
                            странице записи на приём, где вы сможете выбрать нужное направление и сразу подобрать
                            свободного врача.
                        </p>
                    </div>
                </div>
            </div>
        </div>);
};

export default AdmissionDirectionsBlock;