import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

const CardContainerStyle = styled.div`
    display: block;

    height: auto;
    background: #F9F4EA;
`

const CardImageStyle = styled.img`
    /* width: 245px;
    height: 151.8px; */
    /* width: ${props => props.className == "small" ? "245px" : "100%" }; */
`

const CardDetailsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;
    height: auto;
`

const CardDetailsTopStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;

    color: #000000;
`

const CardDetailsDownStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 1.97px;

    color: #000000;
`

const CardSignatureImageStyle = styled.img`
    width: 30px;
    height: 24px;
`

const CardCurrencyImageStyle = styled.img`
    position: relative;
    padding-right: 3px;
    bottom: -3px;
`

const CardCurrencyPriceStyle = styled.div`
    display: inline;
    font-family: 'Helvetica Neue';
`

export { CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle, CardSignatureImageStyle, CardCurrencyImageStyle, CardCurrencyPriceStyle }