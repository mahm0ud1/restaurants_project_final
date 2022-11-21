import CloseButton from '../../../assets/close_button_black.svg';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import SearchInput from './SearchInput';

import { PopupPageStyle, PopupBodyStyle, CloseButtonStyle, PopupTitleStyle } from '../Style'



const Search = () => {
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
                <PopupPageStyle>
                    <PopupTitleStyle>
                        <CloseButtonStyle>
                            <IconButton aria-label="close">
                                <img src={CloseButton} alt="close" />
                            </IconButton>
                        </CloseButtonStyle>
                        <div>Search</div>
                    </PopupTitleStyle>
                    <PopupBodyStyle>
                        <SearchInput />
                    </PopupBodyStyle>
                </PopupPageStyle>
            </Dialog>
        </>
    );
}

export default Search;