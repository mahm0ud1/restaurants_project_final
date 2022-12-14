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

const PopupPageStyle = styled.div`
    position: absolute;
    background: #FFFFFF;
    top: 0px;
    height: 413px;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    width: 100%;
`

const PopupBodyStyle = styled.div`
    flex-direction: column;
    align-items: flex-start;
`

const CloseButtonStyle = styled.div`
    position: fixed;
    left: 25px;
    align-items: center;
`

const PopupTitleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`

export { PopupPageStyle, PopupBodyStyle, CloseButtonStyle, PopupTitleStyle }
export { DialogContainerStyle, DialogOuterContainerStyle }