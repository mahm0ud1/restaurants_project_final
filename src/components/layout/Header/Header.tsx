import { MenuIcon, restaurantLogo, searchLogo, accountLogo, cartLogo, CloseButton } from '../../../assets/AllLogo';

import Hamburgar from '../../menuButtons/hamburgar/Hamburgar';
import Search from '../../menuButtons/Search/Search';

import { IconButton, Badge, Dialog, createTheme, ThemeProvider } from '@mui/material';
import { useRef, useState } from 'react';

import { HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle } from './Style'
import { PopupPageStyle, PopupBodyStyle, CloseButtonStyle, PopupTitleStyle } from './Style'
import { Link } from 'react-router-dom';


const Header = () => {
    const [topWindow, setTopWindow] = useState("");
    const [open, setOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(20);
    const popupTitle = useRef("");

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
        },
    });

    const handleClose = () => {
        setTopWindow("");
        popupTitle.current = "";
        setOpen(false);
    };

    const handleOpen = (windowName: string) => {
        setTopWindow(windowName);
        setOpen(true);
    };

    const getTopWindow = () => {

        return (
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
                            <IconButton aria-label="close" onClick={handleClose}>
                                <img src={CloseButton} alt="close" />
                            </IconButton>
                        </CloseButtonStyle>
                        <div>{popupTitle.current}</div>
                    </PopupTitleStyle>
                    <PopupBodyStyle>
                        {getPopup(topWindow)}
                    </PopupBodyStyle>
                </PopupPageStyle>
            </Dialog>);
    }

    const getPopup = (windowName: string) => {
        switch (windowName) {
            case "search":
                popupTitle.current = "Search";
                return <Search />
            case "hamburger": return <Hamburgar />
        }
    }

    function notificationsLabel(count: number) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    return (
        <>
            <HeaderStyle>
                <LeftHeaderStyle>
                    <MenuIcon onClick={() => handleOpen("hamburger")} />
                </LeftHeaderStyle>
                <CenterHeaderStyle to="/">
                    <RestaurantLogoStyle src={restaurantLogo} alt="restaurant_logo" />
                </CenterHeaderStyle>
                <RightHeaderStyle>
                    <IconButton onClick={() => handleOpen("search")}>
                        <HeaderRightLogoStyle src={searchLogo} alt="search_logo" />
                    </IconButton>
                    <IconButton>
                        <HeaderRightLogoStyle src={accountLogo} alt="account_logo" />
                    </IconButton>
                    <IconButton
                        aria-label={notificationsLabel(notificationCount)}
                        sx={{ zIndex: "0" }}>
                        <ThemeProvider theme={theme}>
                            <Badge
                                color='primary'
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                badgeContent={notificationCount}>
                                <HeaderRightLogoStyle src={cartLogo} alt="cart_logo" />
                            </Badge>
                        </ThemeProvider>
                    </IconButton>
                </RightHeaderStyle>
            </HeaderStyle>
            {getTopWindow()}
        </>
    );
}

export default Header;