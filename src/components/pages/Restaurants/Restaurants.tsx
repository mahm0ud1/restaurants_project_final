import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardsVerticalStyle } from "../../cards/Style";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import { getRestaurants } from "../../../api/EpicureAPI";
import Card from "../../cards/Card/Card";
import { RestaurantsContainerStyle, RestaurantsTabContainerStyle, RestaurantsListContainerStyle, RestaurantLinkStyle } from "./Style";
import { Tabs, Tab } from "../../tools/Tabs/Tabs";
import { getRestaurantStatus } from "../RestaurantHomePage/RestaurantHomePage";
import moment from "moment";


const Restaurants = () => {
    const restaurants = getRestaurants();

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

    const getRestaurantsByFilter = () => {
        switch(subMenu)
        {
            case "new": return [...restaurants].sort((a,b)=>a.created_date-b.created_date)
            .filter(restaurant=>{
                return moment(restaurant.created_date).isAfter(moment(new Date()).subtract(25, 'days'))
            });
            case "most_popular": return [...restaurants].sort((a,b)=>b.rate-a.rate);
            case "open_now": return restaurants.filter(restaurant=>getRestaurantStatus(restaurant)==="Open now")
        }
        return restaurants;
    }

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
                        {getRestaurantsByFilter().map((restaurant: RestaurantCardDetails) =>
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