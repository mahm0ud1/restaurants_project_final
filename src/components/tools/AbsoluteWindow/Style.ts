import styled from "styled-components";

const DialogContainerStyle = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0px;
`

const DialogOuterContainerStyle = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
`

export { DialogContainerStyle, DialogOuterContainerStyle }