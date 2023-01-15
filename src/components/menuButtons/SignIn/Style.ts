import styled from "@emotion/styled";
import { Divider, TextField } from "@mui/material";

const SigninContainerStyle = styled.div`
    height: 590px;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SigninTitleContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 40px 0;
`

const SigninTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;

    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #000000;
`

const SigninsecondaryTitleStyle = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1.97px;

    color: #000000;
`

const SigninInputContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: calc(100% - 48px);
    padding: 0 24px;
`

const SigninInputStyle = styled(TextField)`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1.97px;

    color: #000000;
`

const LoginButtonStyle = styled.button`
    display: block;
    justify-content: center;
    align-items: center;
    margin: 40px auto 16px;
    padding: 5px 24px;
    gap: 10px;

    width: 206px;
    height: 48px;

    background: ${props => props.disabled ? "#979797" : "#000000" };

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #FFFFFF;
`

const ForgetPasswordStringStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1.97px;

    color: #000000;
`

const ErrorMessageStyle = styled.div`
    position: relative;
    top: 15px;
    color: red;
    padding: 0 24px;
`

const DividerStyle = styled(Divider)`

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    width: 100%;
    margin: 40px 0 40px;

    letter-spacing: 1.97px;

    color: #979797;
`

const SignUpButtonStyle = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 5px 15px;
    gap: 10px;

    width: 206px;
    height: 48px;

    border: 1px solid #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    background-color: white;

    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;

    color: #000000;
`

export { SigninContainerStyle, SigninTitleContainerStyle, SigninTitleStyle, SigninsecondaryTitleStyle, SigninInputContainerStyle,
     SigninInputStyle, LoginButtonStyle, ForgetPasswordStringStyle, DividerStyle, ErrorMessageStyle, SignUpButtonStyle }