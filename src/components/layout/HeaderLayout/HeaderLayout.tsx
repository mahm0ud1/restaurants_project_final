import { MenuIcon, restaurantLogo, searchLogo, accountLogo, cartLogo, CloseButton } from '../../../assets/AllLogo';

import Hamburgar from '../../menuButtons/hamburgar/Hamburgar';
import Search from '../../menuButtons/Search/Search';

import { IconButton, Badge, createTheme, ThemeProvider } from '@mui/material';
import { useRef, useState } from 'react';

import { HeaderContainerStyle, HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle } from './Style'
import SignIn from '../../pages/SignIn/SignIn';
import Bag from '../../pages/Bag/Bag';
import DialogWindow from '../../tools/DialogWindow/DialogWindow';
import DialogHeaderWindow from './DialogHeaderWindow';


const Header = () => {
    const [topWindow, setTopWindow] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(25);
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
        setIsOpen(false);
    };

    const handleOpen = (windowName: string) => {
        if(!isOpen)
        {
            setTopWindow(windowName);
            setIsOpen(true);
        }
        else
        {
            handleClose();
        }
    };

    const getDialogWindow = () => {

        return (
            <>
                {isOpen && <DialogWindow
                    closeFunction={handleClose}
                    title={popupTitle.current}
                >
                    {getPopup(topWindow)}
                </DialogWindow>}
            </>);
    }

    const getPopup = (windowName: string) => {
        switch (windowName) {
            case "search":
                popupTitle.current = "Search";
                return <Search />
            case "hamburger": return <Hamburgar />
            case "signin": return <SignIn />
        }
    }

    const getBagWindow = () => {
        if (topWindow == "bag")
            return (
                <>
                    <Bag closeFunction={handleClose} />
                </>
            )
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
            <HeaderContainerStyle>
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
                        <IconButton onClick={() => handleOpen("signin")}>
                            <HeaderRightLogoStyle src={accountLogo} alt="account_logo" />
                        </IconButton>
                        <IconButton
                            aria-label={notificationsLabel(notificationCount)}
                            sx={{ zIndex: "0" }}
                            onClick={() => handleOpen("bag")}>
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
                {/* {getBagWindow()}
            {getDialogWindow()} */}
            {isOpen && <DialogHeaderWindow windowName={topWindow} handleClose={handleClose} />}
            </HeaderContainerStyle>
        </>
    );
}

export default Header;