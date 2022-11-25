import styled from "styled-components";

const BagContainerStyle = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 586px;

    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`

const BagOutSideContainerStyle = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
`

export {BagContainerStyle, BagOutSideContainerStyle}