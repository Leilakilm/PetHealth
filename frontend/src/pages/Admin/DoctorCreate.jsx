import { useNavigate } from "react-router-dom";
import DoctorIntro from "../../components/admin/doctor/DoctorFormInfo.jsx";
import DoctorForm from "../../components/admin/doctor/DoctorForm.jsx";

const PetCreate = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/admin/appointments");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <DoctorIntro />
            <DoctorForm onSuccess={handleSuccess}/>

        </section>
    );
};

export default PetCreate;