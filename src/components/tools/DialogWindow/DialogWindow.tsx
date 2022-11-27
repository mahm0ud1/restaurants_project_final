import CloseButton from '../../../assets/close_button_black.svg';
import IconButton from '@mui/material/IconButton';

import {
    DialogContainerStyle, DialogOuterContainerStyle, CloseButtonStyle, PopupBodyStyle,
    PopupPageStyle, PopupTitleStyle
} from './Style'

const DialogWindow = (props: any) => {
    const closeFunction = props.closeFunction;
    const dialogWindowBody = props.children;
    const dialogWindowTitle: string = props.title;


    return (
        <>
            <DialogContainerStyle>
                <PopupPageStyle>
                    <PopupTitleStyle>
                        <CloseButtonStyle>
                            <IconButton aria-label="close" onClick={closeFunction}>
                                <img src={CloseButton} alt="close" />
                            </IconButton>
                        </CloseButtonStyle>
                        <div>{dialogWindowTitle}</div>
                    </PopupTitleStyle>
                    <PopupBodyStyle>
                        {dialogWindowBody}
                    </PopupBodyStyle>
                </PopupPageStyle>
            </DialogContainerStyle>
            <DialogOuterContainerStyle onClick={closeFunction} />
        </>
    );
}

export default DialogWindow;