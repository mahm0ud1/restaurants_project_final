import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Restaurants = () => {
    let { sub_menu } = useParams();
    const [subMenu, setSubMenu] = useState(sub_menu);

    useEffect( () => {
        
    }, [subMenu])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSubMenu(newValue);
        window.history.replaceState("", "", `homePage_restaurants_${newValue}`);
      };

    const get_restaurants = () => {
        switch (sub_menu) {
            case "all":
            case "new":
            case "most_popular":
            case "open_now": 
            break;
            default: break;
        }
    }

    return (
        <>
            <Box>
                <Tabs
                    value={subMenu}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    TabIndicatorProps={{ style: { background: "#E19D1A" } }}
                    aria-label="secondary tabs example"
                >
                    <Tab value="all" label="All" />
                    <Tab value="new" label="New" />
                    <Tab value="most_popular" label="Most Popular" />
                    <Tab value="open_new" label="Open Now" />
                </Tabs>
            </Box>
        </>
    );
}

export default Restaurants;