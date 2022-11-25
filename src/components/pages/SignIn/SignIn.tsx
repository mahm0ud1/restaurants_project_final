import React, { useEffect } from "react";
import { SigninContainerStyle, SigninTitleContainerStyle, SigninTitleStyle, SigninsecondaryTitleStyle, SigninInputContainerStyle,
    SigninInputStyle, LoginButtonStyle, ForgetPasswordStringStyle, DividerStyle, SignUpButtonStyle } from "./Style";

const SignIn = () => {
    const [ isDisabled, setIsDisabled ] = React.useState<boolean>(true);
    const [ email, setEmail ] = React.useState<string>('');
    const [ password, setPassword ] = React.useState<string>('');

    const checkEmailInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }):void => {
        setEmail(e.currentTarget.value);
    }

    const checkPasswordInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }):void => {
        setPassword(e.currentTarget.value);
    }

    return (
        <>
            <SigninContainerStyle>
                <SigninTitleContainerStyle>
                    <SigninTitleStyle>Sign in</SigninTitleStyle>
                    <SigninsecondaryTitleStyle>To continue the order, please sign in</SigninsecondaryTitleStyle>
                </SigninTitleContainerStyle>
                <SigninInputContainerStyle>
                    <SigninInputStyle
                        id="standard-email-input"
                        label="Email address"
                        type="email"
                        autoComplete="current-email"
                        onChange={checkEmailInput}
                        variant="standard" />
                    <SigninInputStyle
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={checkPasswordInput}
                        variant="standard" />
                </SigninInputContainerStyle>
                <LoginButtonStyle disabled={isDisabled}>login</LoginButtonStyle>
                <ForgetPasswordStringStyle>Forget password?</ForgetPasswordStringStyle>
                <DividerStyle>or</DividerStyle>
                <SignUpButtonStyle>sign up</SignUpButtonStyle>
            </SigninContainerStyle>
        </>
    )
}

export default SignIn;