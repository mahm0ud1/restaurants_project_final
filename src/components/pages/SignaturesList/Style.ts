import styled from "styled-components";

const SignaturesContainerStyle = styled.div`
    margin: 20px 0;
    padding: 24px 0;
    width: 100%;

    background: #FAFAFA;
`

const SignaturesTitleStyle = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    margin-bottom: 20px;

    /* identical to box height, or 194% */
    letter-spacing: 1.25px;
    text-transform: uppercase;

    color: #000000;
`

const SignaturesListContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 58px;
`

const SignatureContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const SignatureImageStyle = styled.img`
    width: 56px;
    height: 56px;
`

const SignatureTypeStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;

    text-align: center;
    letter-spacing: 1.97px;

    color: #000000;

    flex: none;
    order: 1;
    flex-grow: 0;
`

export { SignaturesContainerStyle, SignaturesTitleStyle, SignaturesListContainerStyle, SignatureContainerStyle, SignatureImageStyle, SignatureTypeStyle };