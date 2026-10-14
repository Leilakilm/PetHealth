import { useNavigate } from "react-router-dom";
import RecordIntro from "../components/records/RecordIntro.jsx";
import RecordForm from "../components/records/RecordForm.jsx";

const Record = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/appointments");
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RecordIntro />
            <RecordForm onSuccess={handleSuccess} />
        </section>
    );
};

export default Record;