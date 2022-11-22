import styled from "styled-components";

const CardsContainerStyle = styled.div`

`

const CardsTitleStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 133% */
    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #000000;
    margin: 48px 20px 17px;
`

const CardsStyle = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0 20px;
    overflow-x: auto;

    height: auto;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    gap: 24px;
`

const AllCardsButtonStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    padding: 18px 20px;

    /* identical to box height, or 219% */
    text-align: left;
    letter-spacing: 2px;
    text-transform: capitalize;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

const AllCardsVectorStyle = styled.div`
    display: inline;
    position: relative;
    top: 3px;
    height: 18px;
    width: 24px;
    padding: 0 12px;
`

export { CardsContainerStyle, CardsTitleStyle, CardsStyle, AllCardsButtonStyle, AllCardsVectorStyle }