import Card from '../Card/Card';
import { Vector } from '../../../assets/AllLogo';

import { CardsContainerStyle, CardsTitleStyle, CardsStyle, AllCardsButtonStyle, AllCardsVectorStyle } from '../Style'
import DishCardDetails from '../../../interfaces/DishCardDetails';

const cardDetails: DishCardDetails = {
    imageUrl: "image",
    title: "title",
    details: "details",
    signature: "spicy",
    price: "88"
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DishsCards = () => {
    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>Signature Dish Of:</CardsTitleStyle>
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

export default DishsCards;