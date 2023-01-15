import { ChefOfTheWeekContainerStyle, ChefOfTheWeekTitleStyle, ChefOfTheWeekImageContainerStyle, ChefOfTheWeekImageStyle, ChefOfTheWeekImageTitleStyle, ChefOfTheWeekDescriptionStyle, ChefOfTheWeekCardsStyle, LinkStyle } from './Style'
import { CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle } from '../../cards/Style'

import Card from '../../cards/Card/Card';
import { Vector } from '../../../assets/AllLogo';
import { useEffect, useState } from 'react';
import { getChefOfTheWeek } from '../../../api/middleware';
import ChefOfTheWeekInterface from '../../../interfaces/ChefOfTheWeekInterface';

const ChefOfTheWeek = () => {
    const [chef, setChef] = useState<ChefOfTheWeekInterface>();

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        try {
            const data: ChefOfTheWeekInterface | null = await getChefOfTheWeek();
            if (data != null) {
                setChef(data);
            }
        }
        catch (error) { }
    }

    const containsRestaurants = () => {
        return chef != null && chef.chef_restaurants.length > 0;
    }

    return (
        <>
            {chef &&
                <ChefOfTheWeekContainerStyle>
                    <ChefOfTheWeekTitleStyle>Chef of the week:</ChefOfTheWeekTitleStyle>
                    <ChefOfTheWeekImageContainerStyle>
                        <ChefOfTheWeekImageStyle src={chef.imageUrl} />
                        <ChefOfTheWeekImageTitleStyle>{chef.name}</ChefOfTheWeekImageTitleStyle>
                    </ChefOfTheWeekImageContainerStyle>
                    <ChefOfTheWeekDescriptionStyle>
                        {chef.about}
                    </ChefOfTheWeekDescriptionStyle>
                    {containsRestaurants() &&
                        <ChefOfTheWeekCardsStyle>
                            <CardsTitleStyle>Chef Restaurants:</CardsTitleStyle>
                            <CardsHorizontalStyle>
                                <div />
                                {chef?.chef_restaurants.map((restaurant) => {
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
            }
        </>
    );
}

export default ChefOfTheWeek;