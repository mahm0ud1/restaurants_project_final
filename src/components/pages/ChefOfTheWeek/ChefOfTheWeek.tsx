import { ChefOfTheWeekContainerStyle, ChefOfTheWeekTitleStyle, ChefOfTheWeekImageContainerStyle, ChefOfTheWeekImageStyle, ChefOfTheWeekImageTitleStyle, ChefOfTheWeekDescriptionStyle, ChefOfTheWeekCardsStyle, LinkStyle } from './Style'
import { CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle } from '../../cards/Style'

import Card from '../../cards/Card/Card';
import { Vector } from '../../../assets/AllLogo';
import { getChefRestaurants } from '../../../api/EpicureAPI';
import { useEffect, useState } from 'react';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';

const ChefOfTheWeek = () => {
    const [chef, setChef] = useState<String>("");
    const [restaurants, setRestaurants] = useState<RestaurantCardDetails[]>([]);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        try {
            const dishes = await getChefRestaurants(2);
            setRestaurants([]);
        }
        catch (error) { }
    }

    const containsRestaurants = () => {
        return restaurants.length > 0;
    }

    return (
        <>
            <ChefOfTheWeekContainerStyle>
                <ChefOfTheWeekTitleStyle>Chef of the week:</ChefOfTheWeekTitleStyle>
                <ChefOfTheWeekImageContainerStyle>
                    <ChefOfTheWeekImageStyle src='https://www.ecpi.edu/sites/default/files/Aug%2022%20CIV.png' />
                    <ChefOfTheWeekImageTitleStyle>Yossi Shitrit</ChefOfTheWeekImageTitleStyle>
                </ChefOfTheWeekImageContainerStyle>
                <ChefOfTheWeekDescriptionStyle>
                    Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.
                </ChefOfTheWeekDescriptionStyle>
                { containsRestaurants() &&
                    <ChefOfTheWeekCardsStyle>
                        <CardsTitleStyle>Chef Restaurants:</CardsTitleStyle>
                        <CardsHorizontalStyle>
                            <div />
                            {restaurants.map((restaurant) => {
                                return (
                                    <LinkStyle to={`/restaurant/${restaurant.id}`}>
                                        <Card key={restaurant.id} cardDetails={restaurant} className="small" />
                                    </LinkStyle>
                                )
                            })}
                        </CardsHorizontalStyle>
                        <AllCardsButtonStyle to="/homePage_restaurants_all">
                            All Restaurants<AllCardsVectorStyle><img src={Vector} alt="all restaurants" /></AllCardsVectorStyle>
                        </AllCardsButtonStyle>
                    </ChefOfTheWeekCardsStyle>
                }
            </ChefOfTheWeekContainerStyle>
        </>
    );
}

export default ChefOfTheWeek;