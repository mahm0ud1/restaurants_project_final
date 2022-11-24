import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Chefs = () => {
    let { sub_menu } = useParams();
    const [subMenu, setSubMenu] = useState(sub_menu);

    useEffect( () => {
        
    }, [subMenu])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSubMenu(newValue);
        window.history.replaceState("", "", `${newValue}`);
      };

    const get_restaurants = () => {
        switch (sub_menu) {
            case "all":
            case "new":
            case "most_viewd":
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
                    <Tab value="most_viewd" label="Most Viewd" />
                </Tabs>
            </Box>
        </>
    );
}

export default Chefs;