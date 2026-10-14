const AppointmentsIntro = () => (
    <div className="mb-8">
        <header className="border-b border-slate-300 pb-4 mb-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                Личный кабинет
            </p>
            <h2 className="font-serif text-5xl leading-tight text-slate-800">
                История болезней и записи к врачам
            </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Основное
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    В этом разделе отображается полная история посещений ветеринарной
                    клиники для всех ваших питомцев. Здесь вы можете отслеживать статус
                    текущих записей, просматривать данные о прошедших приёмах, а также
                    управлять расписанием.
                </p>
            </div>

            <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Важно
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Если вы не нашли нужную запись или заметили ошибку в данных,
                    пожалуйста, свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default AppointmentsIntro;