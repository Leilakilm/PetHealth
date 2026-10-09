import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main className={"my-10 text-slate-800 container mx-auto flex-1"}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default MainLayout