import CaringCard from "./CaringCard.jsx";
import Loader from "../ui/Loader.jsx";

const CaringBlock = ({doctors, loading, error}) => {

    if (error) {
        return (
            <p className="text-danger text-sm font-medium py-4">
                Ошибка загрузки: {error}
            </p>
        );
    }
    if (loading) return <Loader/>;

    const hasDoctors = doctors.length > 0
    const limitDoctors = doctors.slice(0, 8)
    return (
        <section id="doctors" className="my-10 md:px-0">
            <div className="flex justify-between items-center border-b border-line mb-4 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Наша команда</span>
            </div>
            <h3 className="font-accent font-bold text-3xl font-bold m-0 scroll-mt-10">Специалисты, которым можно
                доверить<span className={"text-accent"}>.</span></h3>
            <p className="mt-2 block text-sm w-full md:4/5 lg:w-1/3 ">В нашей команде только опытные врачи узкого
                профиля. Ознакомьтесь с их квалификацией и выберите того, кому доверите здоровье своего питомца.</p>
            {!hasDoctors && (
                <p className="mt-2 block text-sm text-danger w-full md:4/5 lg:w-1/3 ">Активных докторов для записи пока
                    нет:(</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5">
                {hasDoctors && (
                    limitDoctors.map((d) => (
                        <CaringCard
                            key={d.id}
                            doctor={d}
                        />
                    ))
                )}
            </div>
        </section>
    )
}
export default CaringBlock