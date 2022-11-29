import styled from "styled-components";

const OrderContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 20px;
`

const OrderLeftContainerStyle = styled.div`

`

const OrderImageStyle = styled.img`
    width: 96px;
    height: 96px;
`

const OrderRightContainerStyle = styled.div`
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 12px 0;
    width: 100%;
    height: calc(100% - 16px);
    gap: 8px;

    background: #F9F4EA;
`

const OrderTopRightConstainerStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
    letter-spacing: 2.67px;
    height: 26px;

    color: #000000;
`

const OrderBottonRightContainerStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.23px;
    height: 28px;

    color: #000000;
`

const OrderPriceStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: right;
    
    letter-spacing: 1.97px;

    color: #000000;
`

const OrderCurrencyImgcyStyle = styled.img`
    position: relative;
    top: 3px;
`

export { OrderContainerStyle, OrderLeftContainerStyle, OrderImageStyle, OrderRightContainerStyle, OrderTopRightConstainerStyle, OrderBottonRightContainerStyle, OrderPriceStyle, OrderCurrencyImgcyStyle }