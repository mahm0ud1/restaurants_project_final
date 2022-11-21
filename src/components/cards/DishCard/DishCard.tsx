// import './DishCard.css';
import { DishCardContainerStyle, DishCardImageStyle, DishCardDetailsStyle, DishCardDetailsTopStyle, DishCardDetailsDownStyle } from './Style'

const DishCard = () => {
    return (
        <>
        <DishCardContainerStyle>
            <DishCardImageStyle>Image</DishCardImageStyle>
            <DishCardDetailsStyle>
                <DishCardDetailsTopStyle>Clare</DishCardDetailsTopStyle>
                <DishCardDetailsDownStyle>Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut</DishCardDetailsDownStyle>
            </DishCardDetailsStyle>
        </DishCardContainerStyle>
        </>
    );
}

export default DishCard;