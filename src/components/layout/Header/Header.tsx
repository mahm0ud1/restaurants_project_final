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

import { HeaderStyle, LeftHeaderStyle, CenterHeaderStyle, RestaurantLogoStyle, RightHeaderStyle, HeaderRightLogoStyle} from './Style'

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
            <HeaderStyle>
                <LeftHeaderStyle>
                    <MenuIcon />
                </LeftHeaderStyle>
                <CenterHeaderStyle>
                    <RestaurantLogoStyle src={restaurantLogo} alt="restaurant_logo" />
                </CenterHeaderStyle>
                <RightHeaderStyle>
                    <IconButton onClick={() => setTopWindow("search")}>
                        <HeaderRightLogoStyle src={searchLogo} alt="search_logo" />
                    </IconButton>
                    <IconButton>
                        <HeaderRightLogoStyle src={accountLogo} alt="account_logo" />
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