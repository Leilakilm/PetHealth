import HeroBlock from "../components/main/HeroBlock.jsx";
import CaringBlock from "../components/main/CaringBlock.jsx";
import Contacts from "../components/main/Contacts.jsx";
import AdmissionDirectionsBlock from "../components/main/AdmissionDirectionsBlock.jsx";
import {useDoctors} from "../hooks/useDoctors.js";

const Main = () => {
    const {doctors, loading, error} = useDoctors();

    return (
        <>
            <HeroBlock/>
            <CaringBlock
                doctors={doctors}
                loading={loading}
                error={error}
            />
            <AdmissionDirectionsBlock/>
            <Contacts/>
        </>
    )
}
export default Main