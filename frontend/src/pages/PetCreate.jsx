import { useNavigate } from "react-router-dom";
import PetFormIntro from "../components/pets/PetFormIntro.jsx";
import PetForm from "../components/pets/PetForm.jsx";

const PetCreate = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/pets");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <PetFormIntro />
            <PetForm onSuccess={handleSuccess} />
        </section>
    );
};

export default PetCreate;