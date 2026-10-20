import Label from "../ui/Label.jsx";

const Contacts = () => {
    return (
        <section className="my-10 md:px-0">
            <div className="flex justify-between items-center border-b border-line mb-4 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Как нас найти</span>
            </div>
            <h3 className="font-accent text-3xl font-bold m-0 text-dark-green scroll-mt-10" id="contacts">Контакты<span
                className="text-accent">.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex flex-col justify-start">
                    <p className="block text-sm w-full md:w-4/5 text-ink/80 leading-relaxed">
                        Мы всегда рады видеть вас и ваших питомцев в нашей клинике.
                        Если у вас возникли вопросы по поводу записи или здоровья животного,
                        вы можете связаться с нами удобным способом. Мы находимся в центре города,
                        чтобы визит к врачу был максимально комфортным и быстрым.
                    </p>
                </div>

                <div className="flex flex-col border-t border-dark-green">
                    <div className="border-b border-dark-green py-4">
                        <Label>Адрес</Label>
                        <p className="text-sm text-dark-green">г. Москва, ул. Примерная, д. 1</p>
                    </div>

                    <div className="border-b border-dark-green py-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label>Телефон</Label>
                            <a href="tel:+79196000335"
                               className="text-sm hover:text-accent transition">
                                +7 (919) 600-03-35
                            </a>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <a href="mailto:info@pethealth.ru"
                               className="text-sm hover:text-accent transition">
                                info@pethealth.ru
                            </a>
                        </div>
                    </div>

                    <div className="border-b border-dark-green py-4">
                        <Label>Режим работы</Label>
                        <div className="flex gap-6">
                            <p className="text-sm">Пн-Пт: 08:00 – 21:00</p>
                            <p className="text-sm">Сб-Вс: 09:00 – 20:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[400px] border border-dark-green relative">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A43309425f2b0adf9564ab16c134333ec88c6d5786f80b1bddce7650af7edb365&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="absolute inset-0 w-full h-full grayscale-[100%] sepia-[20%] contrast-[90%] opacity-80 hover:grayscale-0 hover:sepia-0 hover:opacity-100 transition-all duration-500"
                    title="Карта проезда к клинике"
                ></iframe>
            </div>
        </section>
    )
}
export default Contacts