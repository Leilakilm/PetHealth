import { useNavigate } from "react-router-dom";
import DoctorForm from "../../../components/admin/doctor/DoctorForm.jsx";
import DoctorFormInfo from "../../../components/admin/doctor/DoctorFormInfo.jsx";

const PetCreate = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/admin/doctors");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <DoctorFormInfo />
            <DoctorForm onSuccess={handleSuccess}/>
        </section>
    );
};

export default PetCreate;