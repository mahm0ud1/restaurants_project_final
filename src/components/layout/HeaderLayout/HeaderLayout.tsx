import { MenuIcon, restaurantLogo, searchLogo, accountLogo, cartLogo } from '../../../assets/AllLogo';

import { IconButton, Badge, createTheme, ThemeProvider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { HeaderContainerStyle, HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle } from './Style'
import DialogHeaderWindow from './DialogHeaderWindow';
import { useSelector } from 'react-redux';


const Header = () => {
    const [topWindow, setTopWindow] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const popupTitle = useRef("");

    const countOrders: number = useSelector((state: any) => state.orders.count);
    const isAdmin: boolean = useSelector((state: any) => state.user.isAdmin);
    const isLoggedIn: boolean = useSelector((state: any) => state.user.isLoggedIn);

    useEffect(() => {
        setNotificationCount(countOrders)
    }, [countOrders, isAdmin])

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
            {isOpen && <DialogHeaderWindow windowName={topWindow} handleClose={handleClose} />}
            </HeaderContainerStyle>
        </>
    );
}

export default Header;