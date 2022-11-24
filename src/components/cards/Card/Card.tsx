import DishCardDetails from '../../../interfaces/DishCardDetails';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';
import { CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle, CardSignatureImageStyle, CardCurrencyImageStyle, CardCurrencyPriceStyle } from './Style'
import GetSignatureImage from '../../../assets/signatures/Signatures';
import { Shekel } from '../../../assets/AllLogo';

const Card = (cardDetails: DishCardDetails | RestaurantCardDetails) => {
    const getDetails = () => {
        if (Object.prototype.hasOwnProperty.call(cardDetails, 'signature')) {
            const dishCardDetails = cardDetails as DishCardDetails;
            return <>
                <CardSignatureImageStyle src={GetSignatureImage(dishCardDetails.signature)} />
                <CardDetailsDownStyle>
                    <CardCurrencyImageStyle src={Shekel} />
                    <CardCurrencyPriceStyle>{dishCardDetails.price}</CardCurrencyPriceStyle>
                </CardDetailsDownStyle>
            </>
        }
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