const AppointmentsIntro = () => (
    <div className="mb-5">
        <h3 className="text-3xl font-bold m-0 text-slate-800">
            История болезней и записи к врачам
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div>
                <h3 className="text-lg font-bold m-0 text-slate-800">Основное</h3>
                <p className="mt-2 text-sm w-full md:w-2/3 font-medium text-slate-500 mb-1">
                    В этом разделе отображается полная история посещений ветеринарной
                    клиники для всех ваших питомцев. Здесь вы можете отслеживать статус
                    текущих записей, просматривать данные о прошедших приемах, а также
                    управлять расписанием.
                </p>
            </div>

            <div className="mr-auto flex flex-col">
                <h3 className="text-lg font-bold m-0 text-slate-800">Важно</h3>
                <p className="mt-2 text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">
                    Если вы не нашли нужную запись или заметили ошибку в данных, пожалуйста,
                    свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default AppointmentsIntro;