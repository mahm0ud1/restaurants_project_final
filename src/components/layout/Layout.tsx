import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { HeaderContainer, OutletContainer, FooterContainer } from "./Style";

const Layout = () => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default Layout;