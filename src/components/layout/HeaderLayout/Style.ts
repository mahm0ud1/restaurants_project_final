import styled from "@emotion/styled";
import { Dialog } from "@mui/material";
import { Link } from "react-router-dom";


const DialogWindowStyle = styled(Dialog)`
    height: fit-content;
    background-color: transparent;
    box-shadow: none;
`

const HeaderContainerStyle = styled.div`

`

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    height: 46px;
    background-color: #FFFFFF;
`

const LeftHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const CenterHeaderStyle = styled(Link)`
    display: flex;
    align-items: center;
`

const RestaurantLogoStyle = styled.img`
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
`

const RightHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 24px;
`

const HeaderRightLogoStyle = styled.img`
    height: 20px;
    width: 20px;
    color: blue;
`

const PopupPageStyle = styled.div`
    background: #FFFFFF;
    top: 0px;
    height: fit-content;
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

export { HeaderContainerStyle, HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle};
export { PopupPageStyle, PopupBodyStyle, CloseButtonStyle, PopupTitleStyle, DialogWindowStyle };