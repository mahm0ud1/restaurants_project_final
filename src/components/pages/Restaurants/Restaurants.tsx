import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import { getRestaurants } from "../../../api/EpicureAPI";
import Card from "../../cards/Card/Card";
import { RestaurantsContainerStyle, RestaurantsTabContainerStyle, RestaurantsListContainerStyle } from "./Style";
import Tabs from "../../tools/Tabs/Tabs";
import Tab from "../../tools/Tabs/Tab";


const Restaurants = () => {
    const restaurants = getRestaurants();
    const imgSize = CardLargSize;

    let { sub_menu } = useParams();
    const [subMenu, setSubMenu] = useState(sub_menu !== undefined? sub_menu : "all");

    useEffect(() => {

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
            <RestaurantsContainerStyle>
                <RestaurantsTabContainerStyle>
                    <Tabs selected={subMenu} selectTab={setSubMenu}>
                        <Tab tabName="All" tabValue="all" />
                        <Tab tabName="New" tabValue="new" />
                        <Tab tabName="Most Popular" tabValue="most_popular" />
                        <Tab tabName="Open Now" tabValue="open_now" />
                    </Tabs>
                </RestaurantsTabContainerStyle>
                <RestaurantsListContainerStyle>
                    <CardsVerticalStyle>
                        {restaurants.map((restaurant: RestaurantCardDetails) =>
                            <Card key={restaurant.id} cardDetails={restaurant} imgSize={imgSize} />
                        )}
                    </CardsVerticalStyle>
                </RestaurantsListContainerStyle>
            </RestaurantsContainerStyle>
        </>
    );
}

export default Restaurants;