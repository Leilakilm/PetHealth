import CaringCard from "./CaringCard.jsx";

const CaringBlock = () => {
    return (
        <section id="caring" className="my-10 md:px-0">
            <div className="flex justify-between items-center border-b border-line mb-4 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Наша команда</span>
            </div>
            <h3 className="font-accent font-bold text-3xl font-bold m-0 scroll-mt-10">Специалисты, которым можно
                доверить<span className={"text-accent"}>.</span></h3>
            <p className="mt-2 block text-sm w-full md:4/5 lg:w-1/3 ">В нашей команде только опытные врачи узкого
                профиля. Ознакомьтесь с их квалификацией и выберите того, кому доверите здоровье своего питомца.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5">

                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
                <CaringCard/>
            </div>
        </section>
    )
}
export default CaringBlock