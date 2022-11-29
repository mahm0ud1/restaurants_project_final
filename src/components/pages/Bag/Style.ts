import styled from "styled-components";

const BagContainerStyle = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    width: 100%;
    
    background: #FFFFFF;
`

const BagEmptyContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px auto 24px;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 178px;
    gap: 22px;
`

const BagEmptyImageStyle = styled.img`
    width: 45px;
    height: 45px;
`

const BagEmptyTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    /* or 125% */
    text-align: center;
    letter-spacing: 1.97px;
    text-transform: uppercase;

    color: #000000;
`

const BagOutSideContainerStyle = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
`

export {BagContainerStyle, BagOutSideContainerStyle, BagEmptyImageStyle, BagEmptyTitleStyle, BagEmptyContainerStyle}

const BagWithItemStyle = styled.div`
    flex-direction: column;
    z-index: 2;
    width: 100%;
    height: auto;
    
    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`

const BagOrderTitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 16px auto 20px;
`

const BagOrderTopTitleStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    align-items: center;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #000000;
`

const BagOrderDownTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 1.97px;

    color: #000000;
`

const BagOrdersList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 300px;
    overflow-y: auto;
`

const BagOrderCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    margin: 24px 87px 24px;
    gap: 20px;
`

const BagOrderTotalStyle = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #000000;
`

const BagOrderCurrencyImgcyStyle = styled.img`
    position: relative;
    bottom: -2px;
    padding-left: 6px;
`

const BagOrderCheckoutButton = styled.button`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;

    width: 206px;
    height: 48px;

    background: #000000;
    border: 1px solid #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;

    /* identical to box height, or 111% */
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #FFFFFF;
`

export { BagWithItemStyle, BagOrderTitleStyle, BagOrderTopTitleStyle, BagOrderDownTitleStyle, BagOrdersList, BagOrderCheckoutContainer, BagOrderCurrencyImgcyStyle, BagOrderTotalStyle, BagOrderCheckoutButton }