import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails, getRestaurantDishes } from "../../../api/EpicureAPI";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import Card from "../../cards/Card/Card";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
import { RestaurantsListContainerStyle } from "../Restaurants/Style";
import { TimeIcone } from "../../../assets/AllLogo";
import { RestaurantHomePageContainerStyle, RestaurantHedearContainerStyle, RestaurantImageStyle, RestaurantHeaderDownContainerStyle, RestaurantNameStyleStyle, RestaurantDetailsContainerStyle, RestaurantOpenTimeContainerStyle, RestaurantOpenTimeIconStyle, RestaurantTabsContainerStyle } from './Style';
import { Tab, Tabs } from "../../tools/Tabs/Tabs";

const RestaurantHomePage = () => {
    const { restaurant_id } = useParams();
    const restaurantDetails = getRestaurantDetails(restaurant_id);
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(restaurant_id));
    const [ selectTab, setSelectedTab ] = useState("breakfast");
    const imgSize = CardLargSize;

    useEffect(() => {
        return () => {
            window.scrollTo(0,0);
        };
    }, []);

    const getRestaurantStatus = () => {
        try {
        const timeOpenList = restaurantDetails?.timeOpen;
            if(timeOpenList !== undefined)
            {
                const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

                const d = new Date();
                let day = weekday[d.getDay()];
                const timeOpen = timeOpenList.find(t=>t.day===day);
                if(timeOpen === undefined)
                    return "Closed";
                const current = new Date();
                const startTime = Number((timeOpen?.from as string).replace(":",""));
                const currentTime = Number(current.getHours()+""+ (current.getMinutes()<10?'0':'') + current.getMinutes());
                const endTime = Number((timeOpen?.to as string).replace(":",""));
                console.log(startTime, currentTime, endTime);
                if(startTime > currentTime)
                    return "Will Open at " + timeOpen?.from;
                else if(currentTime >= endTime)
                    return "Closed";
                else
                    return "Open now";
            }
        }
        catch(err){}
        return "Not Definded" 
    }

    return (
        <>
            <RestaurantHomePageContainerStyle>
                <RestaurantHedearContainerStyle>
                    <RestaurantImageStyle src={restaurantDetails?.imageUrl} />
                    <RestaurantHeaderDownContainerStyle>
                        <RestaurantNameStyleStyle>
                            {restaurantDetails?.title}
                        </RestaurantNameStyleStyle>
                        <RestaurantDetailsContainerStyle>
                            {restaurantDetails?.details}
                        </RestaurantDetailsContainerStyle>
                        <RestaurantOpenTimeContainerStyle>
                            <RestaurantOpenTimeIconStyle src={TimeIcone} />
                            {getRestaurantStatus()}
                        </RestaurantOpenTimeContainerStyle>
                    </RestaurantHeaderDownContainerStyle>
                    <RestaurantTabsContainerStyle>
                        <Tabs selected={selectTab} selectTab={setSelectedTab}>
                            <Tab tabName="Breakfast" tabValue="breakfast" />
                            <Tab tabName="Lanch" tabValue="lanch" />
                            <Tab tabName="Dinner" tabValue="dinner" />
                        </Tabs>
                    </RestaurantTabsContainerStyle>
                </RestaurantHedearContainerStyle>
                <RestaurantsListContainerStyle>
                    <CardsVerticalStyle>
                        {dishes.current.map((restaurant: DishCardDetails) =>
                            <Card key={restaurant.id} cardDetails={restaurant}  className="larg" />
                        )}
                    </CardsVerticalStyle>
                </RestaurantsListContainerStyle>
            </RestaurantHomePageContainerStyle>
        </>
    );
}

export default RestaurantHomePage;