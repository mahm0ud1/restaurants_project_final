import styled from "@emotion/styled";

const HeaderSyle = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 46px;
    background-color: #FFFFFF;
`

const LeftHeaderSyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const CenterHeaderSyle = styled.div`
    display: flex;
    align-items: center;
`

const RestaurantLogoSyle = styled.img`
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
`

const RightHeaderSyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const HeaderRightLogoSyle = styled.img`
    height: 20px;
    width: 20px;
    color: blue;
`

export { HeaderSyle, LeftHeaderSyle, CenterHeaderSyle, RestaurantLogoSyle, RightHeaderSyle, HeaderRightLogoSyle};