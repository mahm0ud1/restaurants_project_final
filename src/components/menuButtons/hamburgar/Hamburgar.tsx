import { HamburgerStyle, ButtonsRowsUpperContainerStyle, ButtonsRowsLowerContainerStyle, ButtonRowStyle, LineBreak } from './Style'

const Hamburgar = () => {
    return (
        <>
            <HamburgerStyle>
                <ButtonsRowsUpperContainerStyle>
                    <ButtonRowStyle to="/homePage_restaurants_all">Restaurants</ButtonRowStyle>
                    <ButtonRowStyle to="/chefs/all">Chefs</ButtonRowStyle>
                </ButtonsRowsUpperContainerStyle>
                <LineBreak />
                <ButtonsRowsLowerContainerStyle>
                    <ButtonRowStyle to="/">Contact Us</ButtonRowStyle>
                    <ButtonRowStyle to="/">Term of Use</ButtonRowStyle>
                    <ButtonRowStyle to="/">Privacy Policy</ButtonRowStyle>
                </ButtonsRowsLowerContainerStyle>
            </HamburgerStyle>
        </>
    );
}

export default Hamburgar;