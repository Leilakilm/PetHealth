import Label from "../../ui/Label.jsx";

const DoctorsIntro = () => (
    <div className="mb-8">
        <header className="border-b border-ink pb-4 mb-6">
            <p className="font-bold text-[10px] tracking-[0.2em] uppercase mb-2">
                Админ-панель
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight">
                Специалисты<span className="text-accent">.</span>
            </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <Label>Основное</Label>
                <p className="text-sm leading-relaxed">
                    В этом разделе отображается список всех ветеринарных специалистов,
                    доступных для записи. Здесь вы можете добавлять новых врачей,
                    редактировать их профили, а также скрывать или удалять специалистов,
                    которые больше не принимают.
                </p>
            </div>

            <div>
                <Label>Важно</Label>
                <p className="text-sm leading-relaxed">
                    Если у врача уже есть активные записи от клиентов, удаление может
                    быть ограничено. В таких случаях используйте функцию скрытия, чтобы
                    сохранить историю приемов, но убрать специалиста из списка записи.
                </p>
            </div>
        </div>
    </div>
);

export default DoctorsIntro;