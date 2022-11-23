import styled from "styled-components";

const CardContainerStyle = styled.div`
    display: inline;

    width: 245px;
    height: auto;
`

const CardImageStyle = styled.div`
    background-color: aquamarine;

    width: 245px;
    height: 151.8px;
`

const CardDetailsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;

    height: auto;

    background: #F9F4EA;
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
    font-family: 'Helvetica Neue';
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

export { CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle, CardSignatureImageStyle, CardCurrencyImageStyle }