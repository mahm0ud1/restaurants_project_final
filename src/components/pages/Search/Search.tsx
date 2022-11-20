import CloseButton from '../../../assets/close_button_black.svg';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import searchLogo from '../../../assets/search_logo.svg';

import './Search.css';
import SearchInput from './SearchInput';

const options = ['Clare', 'Lumia'];

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
                <div className='search_page'>
                    <div className='search_header'>
                        <div className='close_button'>
                            <IconButton aria-label="close">
                                <img src={CloseButton} alt="close" />
                            </IconButton></div>
                        <div>Search</div>
                    </div>
                    <div className='search_body'>
                        <SearchInput />
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default Search;