import styled from "styled-components";

const AboutUsContainerStyle = styled.div`
    padding: 24px 24px;
    gap: 32px;
    background: #FAFAFA;
`

const AboutUsLogoStyle = styled.img`
    width: 102px;
    height: 95px;
`

const AboutUsButtonsContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0 50px;
    gap: 20px;
`

const AboutUsButtonStyle = styled.img`
    width: 180px;
    height: 52px;
`

const AboutUsDescriptionStyle = styled.div`
    
`

const AboutUsDescriptionTitleStyle = styled.div`    
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;

    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #000000;
`

const AboutUsDescriptionBodyStyle = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;

    letter-spacing: 2.14px;

    color: #000000;
`


export { AboutUsContainerStyle, AboutUsLogoStyle, AboutUsButtonsContainerStyle, AboutUsButtonStyle, AboutUsDescriptionStyle, AboutUsDescriptionTitleStyle, AboutUsDescriptionBodyStyle }