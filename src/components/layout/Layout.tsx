import { Outlet } from "react-router-dom";
import Footer from "./FooterLayout/FooterLayout";
import Header from "./HeaderLayout/HeaderLayout";
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