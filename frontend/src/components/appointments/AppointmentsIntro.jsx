import Label from "../ui/Label.jsx";

const AppointmentsIntro = () => (
    <div className="mb-8">
        <header className="border-b border-ink pb-4 mb-6">
            <p className="font-bold text-[10px] tracking-[0.2em] uppercase mb-2">
                Личный кабинет
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight">
                История болезней и записи к врачам<span className="text-accent">.</span>
            </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <Label>Основное</Label>
                <p className="text-sm leading-relaxed">
                    В этом разделе отображается полная история посещений ветеринарной
                    клиники для всех ваших питомцев. Здесь вы можете отслеживать статус
                    текущих записей, просматривать данные о прошедших приёмах, а также
                    управлять расписанием.
                </p>
            </div>

            <div>
                <Label>Важно</Label>
                <p className="text-sm leading-relaxed">
                    Если вы не нашли нужную запись или заметили ошибку в данных,
                    пожалуйста, свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default AppointmentsIntro;