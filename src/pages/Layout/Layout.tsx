import HeroSection from "./HeroSection/HeroSection";
import Nav from "./Nav/Nav";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;