const PetsIntro = () => (
    <div className="mb-5">
        <h3 className="text-3xl font-bold m-0 text-slate-800">Мои питомцы</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div>
                <h5 className="text-lg font-bold m-0 text-slate-800">Основное</h5>
                <p className="mt-2 text-sm w-full md:w-2/3 font-medium text-slate-500 mb-1">
                    На этой странице отображаются все питомцы, которых вы добавили в личный
                    кабинет. Здесь вы можете проверить их данные, отредактировать информацию
                    или записать любого питомца на приём к ветеринару. Если питомец ещё не
                    добавлен, воспользуйтесь кнопкой ниже. Все записи и история визитов по
                    каждому питомцу доступны в его карточке.
                </p>
            </div>

            <div className="mr-auto flex flex-col">
                <h5 className="text-lg font-bold m-0 text-slate-800">Важно</h5>
                <p className="mt-2 text-sm w-full md:w-1/2 lg:w-2/5 font-medium text-slate-500 mb-1">
                    Если вы не нашли нужную запись или заметили ошибку в данных, пожалуйста,
                    свяжитесь с администратором клиники.
                </p>
            </div>
        </div>
    </div>
);

export default PetsIntro;