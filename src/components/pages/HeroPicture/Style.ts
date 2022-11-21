import styled from "styled-components";
import heroImage from '../../../assets/hero-picture-1.png';

const HeroContainerStyle = styled.div`
    display: flex;
    height: 273px;
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const HeroInnerContainerStyle = styled.div`
    margin: 65px 20px;
    width: 100%;

    background: rgba(255, 255, 255, 0.88);
`

const HeroTitleStyle = styled.div`
    margin: 16px 10px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 22px;
    line-height: 32px;

    /* or 133% */
    letter-spacing: 1.97px;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: center;
`

const SearchInputContainerStyle = styled.div`
    margin: 0 10px;
`

export { HeroContainerStyle, HeroInnerContainerStyle, HeroTitleStyle, SearchInputContainerStyle };