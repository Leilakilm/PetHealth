import {useNavigate, useParams} from "react-router-dom";
import FeedbackFormIntro from "../components/feedback/FeedbackFormIntro.jsx";
import FeedbackForm from "../components/feedback/FeedbackForm.jsx";

const Feedback = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleSuccess = () => {
        navigate("/appointments");
    };
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <FeedbackFormIntro/>
            <FeedbackForm
                appointmentId={id}
                onSuccess={handleSuccess}/>
        </section>
    )
}
export default Feedback