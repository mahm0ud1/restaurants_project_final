import { Link } from "react-router-dom";
import styled from "styled-components";

const HamburgerStyle = styled.div`
    height: 367px;
`

const ButtonsRowsUpperContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 28px 20px 0;
`

const ButtonsRowsLowerContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
`

const ButtonRowStyle = styled(Link)`
    display: block;
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 22px;

    letter-spacing: 1.92px;

    color: #000000;
    text-decoration: none;
`

const LineBreak = styled.hr`
    margin: 40px 0;
`


export { HamburgerStyle, ButtonsRowsUpperContainerStyle, ButtonsRowsLowerContainerStyle, ButtonRowStyle, LineBreak }