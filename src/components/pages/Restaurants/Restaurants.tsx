import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import { getRestaurants } from "../../../api/EpicureAPI";
import Card from "../../cards/Card/Card";
import { RestaurantsContainerStyle, RestaurantsTabContainerStyle, RestaurantsListContainerStyle, RestaurantLinkStyle } from "./Style";
import { Tabs, Tab } from "../../tools/Tabs/Tabs";


const Restaurants = () => {
    const restaurants = getRestaurants();
    const imgSize = CardLargSize;

    let { sub_menu } = useParams();
    const [subMenu, setSubMenu] = useState(sub_menu !== undefined ? sub_menu : "all");

    useEffect(() => {
        return () => {
            window.scrollTo(0,0);
        };
    }, [])

    useEffect(() => {

    }, [subMenu])

    const handleChange = (newValue: string) => {
        setSubMenu(newValue);
        window.history.replaceState("", "", `homePage_restaurants_${newValue}`);
    };

    return (
        <>
            <RestaurantsContainerStyle>
                <RestaurantsTabContainerStyle>
                    <Tabs selected={subMenu} selectTab={handleChange}>
                        <Tab tabName="All" tabValue="all" />
                        <Tab tabName="New" tabValue="new" />
                        <Tab tabName="Most Popular" tabValue="most_popular" />
                        <Tab tabName="Open Now" tabValue="open_now" />
                    </Tabs>
                </RestaurantsTabContainerStyle>
                <RestaurantsListContainerStyle>
                    <CardsVerticalStyle>
                        {restaurants.map((restaurant: RestaurantCardDetails) =>
                            <RestaurantLinkStyle to={`/restaurant/${restaurant.id}`}>
                                <Card key={restaurant.id} cardDetails={restaurant} className="larg" />
                            </RestaurantLinkStyle>
                        )}
                    </CardsVerticalStyle>
                </RestaurantsListContainerStyle>
            </RestaurantsContainerStyle>
        </>
    );
}

export default Restaurants;