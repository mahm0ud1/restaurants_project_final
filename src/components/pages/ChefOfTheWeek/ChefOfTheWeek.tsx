import { ChefOfTheWeekContainerStyle, ChefOfTheWeekTitleStyle, ChefOfTheWeekImageContainerStyle, ChefOfTheWeekImageStyle, ChefOfTheWeekImageTitleStyle, ChefOfTheWeekDescriptionStyle, ChefOfTheWeekCardsStyle } from './Style'
import { CardsTitleStyle, CardsStyle, AllCardsButtonStyle, AllCardsVectorStyle } from '../../cards/Style'

import Card from '../../cards/Card/Card';
import { Vector } from '../../../assets/AllLogo';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';

const cardDetails: RestaurantCardDetails = {
    id: 1,
    imageUrl: "image",
    title: "title",
    details: ""
}
const cards = [1, 2, 3, 4, 5];

const ChefOfTheWeek = () => {
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
                <ChefOfTheWeekCardsStyle>
                    <CardsTitleStyle>Chef of the week:</CardsTitleStyle>
                    <CardsStyle>
                        {cards.map((card) => <Card key={card} {...cardDetails} />)}
                    </CardsStyle>
                    <AllCardsButtonStyle to="/homePage_restaurants_all">
                        All Restaurants<AllCardsVectorStyle><img src={Vector} /></AllCardsVectorStyle>
                    </AllCardsButtonStyle>
                </ChefOfTheWeekCardsStyle>
            </ChefOfTheWeekContainerStyle>
        </>
    );
}

export default ChefOfTheWeek;