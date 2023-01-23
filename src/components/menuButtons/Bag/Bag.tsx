import HandleCloseInterface from "../../../interfaces/HandleCloseInterface";
import { BagContainerStyle, BagEmptyContainerStyle, BagEmptyImageStyle, BagEmptyTitleStyle, BagOutSideContainerStyle } from "./Style";
import { BagWithItemStyle, BagOrderTitleStyle, BagOrderTopTitleStyle, BagOrderDownTitleStyle, BagOrdersList, BagOrderCheckoutContainer, BagOrderCurrencyImgcyStyle, BagOrderTotalStyle, BagOrderCheckoutButton } from './Style'
import { InnerBag, Shekel } from '../../../assets/AllLogo'
import { useEffect, useState } from "react";
import OrderCardProps from "../../cards/OrderCard/OrderCardPorps";
import { useSelector } from "react-redux";
import OrderCard from "../../cards/OrderCard/OrderCard";

const EmptyBag = () => {
    return (
        <BagEmptyContainerStyle>
            <BagEmptyImageStyle src={InnerBag} />
            <BagEmptyTitleStyle>Your bag is empty</BagEmptyTitleStyle>
        </BagEmptyContainerStyle>
    )
}

const BagWithItems: React.FC<{ orders: OrderCardProps[] }> = ({ orders }) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        return () => {
            setTotalPrice(orders.map((order) => order.price).reduce((a, v) => a = a + v, 0));
        };
    }, [])

    return (
        <BagWithItemStyle>
            <BagOrderTitleStyle>
                <BagOrderTopTitleStyle>My order</BagOrderTopTitleStyle>
                <BagOrderDownTitleStyle>Mashya</BagOrderDownTitleStyle>
            </BagOrderTitleStyle>
            <BagOrdersList>
                {orders.map((order) => <OrderCard orderCardProps={order} />)}
            </BagOrdersList>
            <BagOrderCheckoutContainer>
                <BagOrderTotalStyle>total -
                    <BagOrderCurrencyImgcyStyle src={Shekel} />
                    {totalPrice}
                </BagOrderTotalStyle>
                <BagOrderCheckoutButton>Checkout</BagOrderCheckoutButton>
            </BagOrderCheckoutContainer>
        </BagWithItemStyle>
    )
}

const Bag = ({ closeFunction }: HandleCloseInterface) => {
    const [orders, setOrders] = useState<OrderCardProps[]>([])
    const [isEmpty, setIsEmpty] = useState<boolean>(true);

    const ordersCount: number = useSelector((state: any) => state.orders.count);
    const ordersList: OrderCardProps[] = useSelector((state: any) => state.orders.ordersList);

    useEffect(() => {
        setIsEmpty(ordersCount === 0);
        setOrders(ordersList);
    }, [ordersCount, ordersList])

    const CloseBag = () => {
        closeFunction();
    }

    return (
        <>
            <BagContainerStyle>
                {isEmpty ? <EmptyBag /> : <BagWithItems orders={orders} />}
            </BagContainerStyle>
            <BagOutSideContainerStyle onClick={CloseBag} />
        </>
    )
}

export default Bag;