import CloseButton from '../../../assets/close_button_black.svg';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

const AbsoluteWindow = (props:any) => {
    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

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
                <div className='absolute_window_page'>
                    <div className='absolute_window_title'>
                        <div className='close_button'>
                            <IconButton aria-label="close">
                                <img src={CloseButton} alt="close" />
                            </IconButton></div>
                        <div>{}</div>
                    </div>
                    <div className='absolute_window_body'>
                        {}
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default AbsoluteWindow;