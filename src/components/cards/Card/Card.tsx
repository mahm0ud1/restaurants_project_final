import DishCardDetails from '../../../interfaces/DishCardDetails';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';
import { CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle } from './Style'

const Card = (cardDetails: DishCardDetails | RestaurantCardDetails) => {
    const getDetails = () => {
        if (Object.prototype.hasOwnProperty.call(cardDetails, 'signature')) {
            const dishCardDetails = cardDetails as DishCardDetails;
            return <>
                <CardDetailsDownStyle>{getSignature(dishCardDetails.signature)}</CardDetailsDownStyle>
                <CardDetailsDownStyle>{dishCardDetails.price}</CardDetailsDownStyle>
            </>
        }
    }

    const getSignature = (signature:string) => {
        return signature;
    }

    return (
        <>
            <CardContainerStyle>
                <CardImageStyle>{cardDetails.imageUrl}</CardImageStyle>
                <CardDetailsStyle>
                    <CardDetailsTopStyle>{cardDetails.title}</CardDetailsTopStyle>
                    <CardDetailsDownStyle>{cardDetails.details}</CardDetailsDownStyle>
                    {getDetails()}
                </CardDetailsStyle>
            </CardContainerStyle>
        </>
    );
}

export default Card;