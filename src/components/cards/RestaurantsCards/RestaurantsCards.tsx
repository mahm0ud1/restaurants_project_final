import Card from '../Card/Card';
import { Vector } from '../../../assets/AllLogo';

import { CardsContainerStyle, CardsTitleStyle, CardsStyle, AllCardsButtonStyle, AllCardsVectorStyle } from '../Style'
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';

const cardDetails: RestaurantCardDetails = {
    imageUrl: "image",
    title: "title",
    details: "details"
}
const cards = [1, 2, 3, 4, 5];

const RestaurantsCards = () => {
    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>popular restaurant in epicure:</CardsTitleStyle>
                <CardsStyle>
                    {cards.map((card) => <Card key={card} {...cardDetails} />)}
                </CardsStyle>
                <AllCardsButtonStyle to="/homePage_restaurants_all">
                    All Restaurants<AllCardsVectorStyle><img src={Vector} /></AllCardsVectorStyle>
                </AllCardsButtonStyle>
            </CardsContainerStyle>
        </>
    );
}

export default RestaurantsCards;