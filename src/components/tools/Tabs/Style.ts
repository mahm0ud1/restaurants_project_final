import styled, { keyframes } from "styled-components"

const TabsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px;
    font-style: normal;
    font-weight: ${props => props.className === "selected" ? "400" : "200"};
    font-size: 18px;
    line-height: ${props => props.className === "selected" ? "21px" : "22px"};

    letter-spacing: 1.92px;

    color: #000000;
`

const clickEffectAnimation = keyframes`
    0% { width: 0%; left: 50%}
    100% { width: 100%; left: 0 }
`

const TabStyle = styled.div`
    position: relative;
    padding-bottom: 6px;

    &:after {
        content: "";
        background: #DE9200E5;
        position: absolute;
        bottom: 0;
        left: 0;
        height: ${props => props.className == "selected" ? "1.8px" : "0"};
        animation-name: ${props => props.className == "selected" ? clickEffectAnimation : ""};
        animation-duration: 1s;
        width: 100%;
    }
`

export { TabsStyle, TabStyle }