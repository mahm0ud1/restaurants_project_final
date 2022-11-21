import styled from "@emotion/styled";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 46px;
    background-color: #FFFFFF;
`

const LeftHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const CenterHeaderStyle = styled.div`
    display: flex;
    align-items: center;
`

const RestaurantLogoStyle = styled.img`
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
`

const RightHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const HeaderRightLogoStyle = styled.img`
    height: 20px;
    width: 20px;
    color: blue;
`

export { HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle};