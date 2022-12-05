import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const RestaurantHomePageContainerStyle = styled.div`
    width: 100%;
`

const RestaurantHedearContainerStyle = styled.div`
    width: 100%;
`

const RestaurantImageStyle = styled.img`
    width: 100%;
`

const RestaurantHeaderDownContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 20px 30px;
    gap: 16px;
`

const RestaurantNameStyleStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;

    color: #000000;
`

const RestaurantDetailsContainerStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;

    color: #000000;
`

const RestaurantOpenTimeContainerStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1.97px;

    color: #000000;
`

const RestaurantOpenTimeIconStyle = styled.img`
    position: relative;
    top: 3px;
    margin-right: 8px;
`

const RestaurantTabsContainerStyle = styled.div`
    width: 250px;
`

export const DishCloseContainerStyle = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 46px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
    align-items: center;
`

export const DishCloseButtonStyle = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 24.5px;
`

export const DishContainerStyle = styled.div`
    position: relative;
    width: 100%;
`

export const DishLinkStyle = styled(Link)`
    
`

export { RestaurantHomePageContainerStyle, RestaurantHedearContainerStyle, RestaurantImageStyle, RestaurantHeaderDownContainerStyle, RestaurantNameStyleStyle, RestaurantDetailsContainerStyle, RestaurantOpenTimeContainerStyle, RestaurantOpenTimeIconStyle, RestaurantTabsContainerStyle }