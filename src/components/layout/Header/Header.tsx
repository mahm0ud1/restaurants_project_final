import Search from '../../pages/Search/Search';

import MenuIcon from '@mui/icons-material/Menu';
import restaurantLogo from '../../../assets/restaurant_logo.svg';
import searchLogo from '../../../assets/search_logo.svg';
import accountLogo from '../../../assets/account_logo.svg';
import cartLogo from '../../../assets/cart_logo.svg';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import { HeaderSyle, LeftHeaderSyle, CenterHeaderSyle, RestaurantLogoSyle, RightHeaderSyle, HeaderRightLogoSyle} from './Style'

const Header = () => {
    const [topWindow, setTopWindow] = useState("");

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
        },
    });

    const closeTopWindow = (windowName: string) => {
        setTopWindow("");
    }

    const getTopWindow = () => {
        switch (topWindow) {
            case "search": return <Search />
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
            <HeaderSyle>
                <LeftHeaderSyle>
                    <MenuIcon />
                </LeftHeaderSyle>
                <CenterHeaderSyle>
                    <RestaurantLogoSyle src={restaurantLogo} alt="restaurant_logo" />
                </CenterHeaderSyle>
                <RightHeaderSyle>
                    <IconButton onClick={() => setTopWindow("search")}>
                        <HeaderRightLogoSyle src={searchLogo} alt="search_logo" />
                    </IconButton>
                    <IconButton>
                        <HeaderRightLogoSyle src={accountLogo} alt="account_logo" />
                    </IconButton>
                    <IconButton
                        aria-label={notificationsLabel(100)}
                        sx={{zIndex:"0"}}>
                        <ThemeProvider theme={theme}>
                            <Badge
                                color='primary'
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                badgeContent={19}>
                                <HeaderRightLogoSyle src={cartLogo} alt="cart_logo" />
                            </Badge>
                        </ThemeProvider>
                    </IconButton>
                </RightHeaderSyle>
            </HeaderSyle>
            {getTopWindow()}
        </>
    );
}

export default Header;