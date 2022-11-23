import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsContainerStyle = styled.div`
    margin: 48px 20px 17px;
`

const CardsTitleStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #000000;
`

const CardsStyle = styled.div`
    display: flex;
    align-items: flex-start;
    overflow-x: auto;

    height: auto;

    flex: none;
    order: 0;
    flex-grow: 0;
    gap: 24px;
    padding: 17px 0;
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

// const LinkStyle = styled(Link)`
//     text-decoration: none;
//     font-family: 'Helvetica Neue';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 35px;

//     /* identical to box height, or 219% */
//     text-align: right;
//     letter-spacing: 2px;
//     text-transform: capitalize;

//     color: #000000;
// `

export { CardsContainerStyle, CardsTitleStyle, CardsStyle, AllCardsButtonStyle, AllCardsVectorStyle }