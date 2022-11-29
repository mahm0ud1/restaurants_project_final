import { Shekel } from '../../../assets/AllLogo';
import OrderCardProps from './OrderCardPorps';
import { OrderContainerStyle, OrderLeftContainerStyle, OrderImageStyle, OrderRightContainerStyle, OrderTopRightConstainerStyle, OrderBottonRightContainerStyle, OrderPriceStyle, OrderCurrencyImgcyStyle } from './Style'

const OrderCard = ({orderCardProps}:{orderCardProps:OrderCardProps}) => {
    return (
        <>
            <OrderContainerStyle>
                <OrderLeftContainerStyle>
                    <OrderImageStyle src={orderCardProps.imageUrl} />
                </OrderLeftContainerStyle>
                <OrderRightContainerStyle>
                    <OrderTopRightConstainerStyle>{orderCardProps.title}</OrderTopRightConstainerStyle>
                    <OrderBottonRightContainerStyle>{orderCardProps.details}</OrderBottonRightContainerStyle>
                    <OrderPriceStyle>
                        <OrderCurrencyImgcyStyle src={Shekel} />
                        {orderCardProps.price}
                    </OrderPriceStyle>
                </OrderRightContainerStyle>
            </OrderContainerStyle>
        </>
    )
}

export default OrderCard;