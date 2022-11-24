import styled from "styled-components";

const ChefOfTheWeekContainerStyle = styled.div`
    margin: 20px 0;
    padding: 0 20px;
`

const ChefOfTheWeekTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    margin: 35px 0 16px;

    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #000000;
`

const ChefOfTheWeekImageContainerStyle = styled.div`
`

const ChefOfTheWeekImageStyle = styled.img`
    width: 100%;
    height: auto;
    background-color: red;
`

const ChefOfTheWeekImageTitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 100%;
    height: 51px;

    position: relative;
    top: -54px;
    background: rgba(255, 255, 255, 0.8);
`

const ChefOfTheWeekDescriptionStyle = styled.div`
    position: relative;
    top: -30px;

    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;

    text-align: justify;
    letter-spacing: 1.25px;

    color: #000000;
`

const ChefOfTheWeekCardsStyle = styled.div`

`

export { ChefOfTheWeekContainerStyle, ChefOfTheWeekTitleStyle, ChefOfTheWeekImageContainerStyle, ChefOfTheWeekImageStyle, ChefOfTheWeekImageTitleStyle, ChefOfTheWeekDescriptionStyle, ChefOfTheWeekCardsStyle };