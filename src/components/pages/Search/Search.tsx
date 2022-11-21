import CloseButton from '../../../assets/close_button_black.svg';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import SearchInput from './SearchInput';

import { SearchPageStyle, CloseButtonStyle, SearchBodyStyle, SearchHeaderStyle } from './Style'

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
                <SearchPageStyle>
                    <SearchHeaderStyle>
                        <CloseButtonStyle>
                            <IconButton aria-label="close">
                                <img src={CloseButton} alt="close" />
                            </IconButton>
                        </CloseButtonStyle>
                        <div>Search</div>
                    </SearchHeaderStyle>
                    <SearchBodyStyle>
                        <SearchInput />
                    </SearchBodyStyle>
                </SearchPageStyle>
            </Dialog>
        </>
    );
}

export default Search;