const PetsIntro = () => (
    <div className="mb-8">
        <header className="border-b border-slate-300 pb-4 mb-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                Страница моих питомцев
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight text-slate-800">
                Мои питомцы<span className="text-orange-600">.</span>
            </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Основное
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    На этой странице отображаются все питомцы, которых вы добавили в личный
                    кабинет. Здесь вы можете проверить их данные, отредактировать информацию
                    или записать любого питомца на приём к ветеринару. Если питомец ещё не
                    добавлен, воспользуйтесь кнопкой ниже. Все записи и история визитов по
                    каждому питомцу доступны в его карточке.
                </p>
            </div>

            <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
                    Важно
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Если вы не нашли нужную запись или заметили ошибку в данных, пожалуйста,
                    свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default PetsIntro;