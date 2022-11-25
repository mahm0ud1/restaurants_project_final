import DishCardDetails from '../../../interfaces/DishCardDetails';
import {
    CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle,
    CardSignatureImageStyle, CardCurrencyImageStyle, CardCurrencyPriceStyle
} from './Style'
import GetSignatureImage from '../../../assets/signatures/Signatures';
import { Shekel } from '../../../assets/AllLogo';
import CustomCardProps from '../../../interfaces/CustomCardProps';

const Card = (props: CustomCardProps) => {
    const size = props.imgSize;
    const cardDetails = props.cardDetails;

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
            <CardContainerStyle style={{width: size.width}}>
                <CardImageStyle style={size} src={cardDetails.imageUrl} />
                <CardDetailsStyle style={{width: size.width}}>
                    <CardDetailsTopStyle>{cardDetails.title}</CardDetailsTopStyle>
                    <CardDetailsDownStyle>{cardDetails.details}</CardDetailsDownStyle>
                    {getDetails()}
                </CardDetailsStyle>
            </CardContainerStyle>
        </>
    );
}

export default Card;