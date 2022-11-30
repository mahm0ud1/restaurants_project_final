import { Link } from "react-router-dom";
import styled from "styled-components";

const CardSmallSize = {
    width: '245px',
    height: '151.8px'
}

const CardLargSize = {
    width: '100%',
    height: 'auto'
}

const CardsContainerStyle = styled.div`
    margin: 48px 0 17px;
`

const CardsTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 1.25px;
    text-transform: uppercase;
    padding-left: 20px;

    color: #000000;
`

const CardsHorizontalStyle = styled.div`
    display: flex;
    align-items: flex-start;
    overflow-x: auto;

    height: auto;
    grid-template-columns: 200px 1fr;
    grid-gap: 1rem;
    gap: 20px;
    padding: 17px 0;
`

const CardsVerticalStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    height: auto;

    gap: 25px;
`

const AllCardsButtonStyle = styled(Link)`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;

    text-align: left;
    letter-spacing: 2px;
    text-transform: capitalize;
    padding-left: 20px;

    color: #000000;
    
    text-decoration: none;
`

const AllCardsVectorStyle = styled.div`
    display: inline;
    position: relative;
    top: 3px;
    height: 18px;
    width: 24px;
    padding: 0 12px;
`

export { CardSmallSize, CardLargSize, CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, CardsVerticalStyle, AllCardsButtonStyle, AllCardsVectorStyle }