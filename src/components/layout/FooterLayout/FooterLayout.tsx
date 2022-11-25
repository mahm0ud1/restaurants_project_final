import { FooterContainerStyle, FooterButtonStyle, DividerStyle } from './Style'

const Footer = () => {
    return (
        <>
            <DividerStyle />
            <FooterContainerStyle>
                <FooterButtonStyle>Contact Us</FooterButtonStyle>
                <FooterButtonStyle>Term of Use</FooterButtonStyle>
                <FooterButtonStyle>Privacy Policy</FooterButtonStyle>
            </FooterContainerStyle>
        </>
    );
}

export default Footer;