import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <>
            <div className="header_container">
                <Header />
            </div>
            <div className="outlet_container">
                <Outlet />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </>
    );
}

export default Layout;