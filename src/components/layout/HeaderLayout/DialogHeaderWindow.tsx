import Hamburgar from "../../menuButtons/hamburgar/Hamburgar";
import Search from "../../menuButtons/Search/Search";
import Bag from "../../menuButtons/Bag/Bag";
import SignIn from "../../menuButtons/SignIn/SignIn";
import DialogWindow from "../../tools/DialogWindow/DialogWindow";
import DialogHeaderProps from "./DialogHeaderProps";

const DialogHeaderWindow = (props: DialogHeaderProps) => {
    const windowName = props.windowName;

    const getWindowType = () => {
        switch (windowName.toLowerCase()) {
            case "bag": return "with_header";
            case "account":
            case "search":
            case "burger": return "on_header";
        }
        return "";
    }

    const getWindowTitle = () => {
        switch (windowName.toLowerCase()) {
            case "search": return "search";
            case "account":
            case "burger":
            case "bag":;
        }
        return "";
    }

    const getWindow = (windowName: string) => {
        switch (windowName) {
            case "search": return <Search closeFunction={props.handleClose} />
            case "hamburger": return <Hamburgar closeFunction={props.handleClose} />
            case "signin": return <SignIn closeFunction={props.handleClose} />
            case "bag": return <Bag closeFunction={props.handleClose} />
        }
    }

    const getDialogWindow = () => {
        const windowTitle = getWindowTitle();
        const windowType = getWindowType();
        const windowContent = getWindow(windowName);

        switch(windowType)
        {
            case "":
            case "on_header": return (<>
                <DialogWindow
                    closeFunction={props.handleClose}
                    title={windowTitle}
                >
                    {windowContent}
                </DialogWindow>
            </>);
            case "with_header": return (<>{windowContent}</>);
        }
    }

    return (
        <>
            {getDialogWindow()}
        </>
    );
}

export default DialogHeaderWindow;