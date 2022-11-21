import styled from "styled-components";

const DishCardContainerStyle = styled.div`
    display: inline;

    width: 245px;
    height: auto;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

const DishCardImageStyle = styled.div`
    background-color: aquamarine;

    width: 245px;
    height: 151.8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

const DishCardDetailsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;

    height: auto;

    background: #F9F4EA;

    /* Inside auto layout */
    flex: none;
    order: 12;
    align-self: stretch;
    flex-grow: 0;
`

const DishCardDetailsTopStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

const DishCardDetailsDownStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    /* identical to box height, or 125% */
    letter-spacing: 1.97px;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`

export { DishCardContainerStyle, DishCardImageStyle, DishCardDetailsStyle, DishCardDetailsTopStyle, DishCardDetailsDownStyle }