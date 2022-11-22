import styled from "styled-components";

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

const ButtonRowStyle = styled.div`
    display: block;
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */
    letter-spacing: 1.92px;

    color: #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

const LineBreak = styled.hr`
    margin: 40px 0;
`


export { ButtonsRowsUpperContainerStyle, ButtonsRowsLowerContainerStyle, ButtonRowStyle, LineBreak }