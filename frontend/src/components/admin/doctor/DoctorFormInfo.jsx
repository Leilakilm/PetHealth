
const DoctorIntro = () => (
    <div>
        <header>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                форма регистрации
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight">
                Регистрация специалиста<span className="text-accent">.</span>
            </h2>
        </header>
        <p className="w-full md:w-2/3 text-sm leading-relaxed my-2">
            На этой странице вы добавляете нового специалиста.
            Укажите ФИО и специализацию врача. После сохранения
            специалист будет доступен для записи на прием клиентам.
        </p>
    </div>
);

export default DoctorIntro;