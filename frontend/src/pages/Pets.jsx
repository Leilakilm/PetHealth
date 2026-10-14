import PetsIntro from "../components/pets/PetsIntro.jsx";
import PetsEmpty from "../components/pets/PetsEmpty.jsx";
import PetCard from "../components/pets/PetCard.jsx";
import { usePets } from "../hooks/usePets.js";
import Loader from "../components/ui/Loader.jsx";

const Pets = () => {
    const { pets, loading, error } = usePets();

    if (loading) return <Loader />;

    if (error) {
        return (
            <p className="text-red-600 text-sm font-medium py-4">
                Ошибка загрузки: {error}
            </p>
        );
    }

    return (
        <div>
            <PetsIntro />
            {pets.length === 0 ? (
                <PetsEmpty />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Pets;