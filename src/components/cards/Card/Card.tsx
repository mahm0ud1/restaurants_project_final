import DishCardDetails from '../../../interfaces/DishCardDetails';
import {
    CardContainerStyle, CardImageStyle, CardDetailsStyle, CardDetailsTopStyle, CardDetailsDownStyle,
    CardSignatureImageStyle, CardCurrencyImageStyle, CardCurrencyPriceStyle, CardPriceDividerStyle
} from './Style'
import GetSignatureImage from '../../../assets/signatures/Signatures';
import { Shekel } from '../../../assets/AllLogo';
import CustomCardProps from '../../../interfaces/CustomCardProps';

const Card = (props: CustomCardProps) => {
    const className = props.className;
    const cardDetails = props.cardDetails;

    const getDetails = () => {
        if (Object.prototype.hasOwnProperty.call(cardDetails, 'signature')) {
            const dishCardDetails = cardDetails as DishCardDetails;
            return <>
                {className === "larg" || <CardSignatureImageStyle src={GetSignatureImage(dishCardDetails.signature)} />}
                <CardDetailsDownStyle>
                    <CardPriceDividerStyle textAlign="left">
                        <CardCurrencyImageStyle src={Shekel} />
                        <CardCurrencyPriceStyle>{dishCardDetails.price}</CardCurrencyPriceStyle>
                    </CardPriceDividerStyle>
                </CardDetailsDownStyle>
            </>
        }
    }

    return (
        <>
            <CardContainerStyle className={className}>
                <CardImageStyle className={className} src={cardDetails.imageUrl} />
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