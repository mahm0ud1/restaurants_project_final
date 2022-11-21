import { Dialog } from "@mui/material";
import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import CloseButton from '../../../assets/close_button_black.svg';

import { PopupPageStyle, PopupBodyStyle, CloseButtonStyle, PopupTitleStyle } from '../Style';

const Hamburgar = () => {
    const [open, setOpen] = useState(true);
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Dialog
                open={open}
                onClose={handleClose}
                style={{ height: '413px' }}
                fullScreen={true}
                scroll="body"
            >
                <PopupPageStyle>
                    <PopupTitleStyle>
                        <CloseButtonStyle>
                            <IconButton aria-label="close">
                                <img src={CloseButton} alt="close" />
                            </IconButton>
                        </CloseButtonStyle>
                    </PopupTitleStyle>
                    <PopupBodyStyle>
                        <div></div>
                    </PopupBodyStyle>
                </PopupPageStyle>
        </Dialog>
        </>
    );
}

export default Hamburgar;