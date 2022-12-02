import { Link } from "react-router-dom";
import styled from "styled-components";

const RestaurantsContainerStyle = styled.div`
    width: 100%;
    margin: 0 auto;
`

const RestaurantsTabContainerStyle = styled.div`
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    width: 100%;
`

const RestaurantsListContainerStyle = styled.div`
    padding: 20px 20px 53px;
`

const RestaurantLinkStyle = styled(Link)`
    text-decoration: none;
    
`

export { RestaurantsContainerStyle, RestaurantsTabContainerStyle, RestaurantsListContainerStyle, RestaurantLinkStyle }