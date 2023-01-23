import React from "react";
import HandleCloseInterface from "../../../interfaces/HandleCloseInterface";
import { login } from "../../../api/middleware";
import {
    SigninContainerStyle, SigninTitleContainerStyle, SigninTitleStyle, SigninsecondaryTitleStyle, SigninInputContainerStyle,
    SigninInputStyle, LoginButtonStyle, ForgetPasswordStringStyle, DividerStyle, ErrorMessageStyle, SignUpButtonStyle
} from "./Style";
import { useDispatch } from "react-redux";
import {setUserInfo, setIsAdmin, setIsLoggedIn} from '../../../store/UserSlicer'

const SignIn = ({ closeFunction }: HandleCloseInterface) => {
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
    const [errorMessage, setErrorMessage] = React.useState<String>("");
    const email = React.useRef<string>('');
    const password = React.useRef<string>('');

    const dispatch = useDispatch();

    const checkInputs = () => {
        if (email.current !== "" && password.current !== "") {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }

    const checkEmailInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }): void => {
        email.current = String(e.currentTarget.value);
        checkInputs();
    }

    const checkPasswordInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }): void => {
        password.current = String(e.currentTarget.value);
        checkInputs();
    }

    const loginClick = async () => {
        const response: any = await login(email.current, password.current);
        if(response.responeMessage === "Success") {
            dispatch(setIsAdmin(response.respone.role === "admin"));
            dispatch(setIsLoggedIn(true));
            dispatch(setUserInfo(undefined));
            closeFunction();
        }
        else {
            dispatch(setIsAdmin(false));
            dispatch(setIsLoggedIn(false));
            dispatch(setUserInfo(undefined));
            setErrorMessage(response.responeMessage);
        }
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
                <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>
                <LoginButtonStyle disabled={isDisabled} onClick={loginClick}>login</LoginButtonStyle>
                <ForgetPasswordStringStyle>Forget password?</ForgetPasswordStringStyle>
                <DividerStyle>or</DividerStyle>
                <SignUpButtonStyle>sign up</SignUpButtonStyle>
            </SigninContainerStyle>
        </>
    )
}

export default SignIn;