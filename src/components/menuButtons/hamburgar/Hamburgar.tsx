import { ButtonsRowsUpperContainerStyle, ButtonsRowsLowerContainerStyle, ButtonRowStyle, LineBreak } from './Style'

const Hamburgar = () => {
    return (
        <>
            <ButtonsRowsUpperContainerStyle>
                <ButtonRowStyle>Restaurants</ButtonRowStyle>
                <ButtonRowStyle>Chefs</ButtonRowStyle>
            </ButtonsRowsUpperContainerStyle>
            <LineBreak />
            <ButtonsRowsLowerContainerStyle>
                <ButtonRowStyle>Contact Us</ButtonRowStyle>
                <ButtonRowStyle>Term of Use</ButtonRowStyle>
                <ButtonRowStyle>Privacy Policy</ButtonRowStyle>
            </ButtonsRowsLowerContainerStyle>
        </>
    );
}

export default Hamburgar;