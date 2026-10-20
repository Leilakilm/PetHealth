import Label from "../ui/Label.jsx";

const PetsIntro = () => (
    <div className="mb-8">
        <header className="border-b  pb-4 mb-6">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase  mb-2">
                Страница моих питомцев
            </p>
            <h2 className="font-accent font-bold text-5xl leading-tight ">
                Мои питомцы<span className="text-accent">.</span>
            </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <Label>Основное</Label>
                <p className="text-sm leading-relaxed">
                    На этой странице отображаются все питомцы, которых вы добавили в личный
                    кабинет. Здесь вы можете проверить их данные, отредактировать информацию
                    или записать любого питомца на приём к ветеринару. Если питомец ещё не
                    добавлен, воспользуйтесь кнопкой ниже. Все записи и история визитов по
                    каждому питомцу доступны в его карточке.
                </p>
            </div>

            <div>
                <Label>Важно</Label>
                <p className="text-sm leading-relaxed">
                    Если вы не нашли нужную запись или заметили ошибку в данных, пожалуйста,
                    свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default PetsIntro;