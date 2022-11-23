import styled from "styled-components";

const FooterContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 32px 19px;
    background: #FFFFFF;
`

const FooterButtonStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */
    letter-spacing: 1.92px;

    color: #000000;
`

export { FooterContainerStyle, FooterButtonStyle }