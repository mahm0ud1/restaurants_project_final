import HandleCloseInterface from "../../../interfaces/HandleCloseInterface";
import { BagContainerStyle, BagEmptyContainerStyle, BagEmptyImageStyle, BagEmptyTitleStyle, BagOutSideContainerStyle } from "./Style";
import { BagWithItemStyle, BagOrderTitleStyle, BagOrderTopTitleStyle, BagOrderDownTitleStyle, BagOrdersList, BagOrderCheckoutContainer, BagOrderCurrencyImgcyStyle, BagOrderTotalStyle, BagOrderCheckoutButton } from './Style'
import { InnerBag, Shekel } from '../../../assets/AllLogo'
import { useEffect, useState } from "react";
import OrderCard from "../../cards/OrderCard/OrderCard";
import OrderCardProps from "../../cards/OrderCard/OrderCardPorps";
import { getOrders } from "../../../api/EpicureAPI";

const EmptyBag = () => {
    return (
        <BagEmptyContainerStyle>
            <BagEmptyImageStyle src={InnerBag} />
            <BagEmptyTitleStyle>Your bag is empty</BagEmptyTitleStyle>
        </BagEmptyContainerStyle>
    )
}

const BagWithItems = ({orders}:{orders:OrderCardProps[]}) => {
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    useEffect(() => {
        return () => {
            setTotalPrice(orders.reduce((a,v) =>  a = a + v.price , 0 ));
        };
    }, [])

    return (
        <BagWithItemStyle>
            <BagOrderTitleStyle>
                <BagOrderTopTitleStyle>My order</BagOrderTopTitleStyle>
                <BagOrderDownTitleStyle>Mashya</BagOrderDownTitleStyle>
            </BagOrderTitleStyle>
            <BagOrdersList>
                {orders.map((order)=><OrderCard orderCardProps={order} />)}
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
    // ToDo - change getOrders() with redux
    const ordersCards:OrderCardProps[] = getOrders();
    const [isEmpty, setIsEmpty] = useState<boolean>(ordersCards.length===0);

    const CloseBag = () => {
        closeFunction();
    }

    return (
        <>
            <BagContainerStyle>
                {isEmpty ? <EmptyBag /> : <BagWithItems orders={ordersCards} />}
            </BagContainerStyle>
            <BagOutSideContainerStyle onClick={CloseBag} />
        </>
    )
}

export default Bag;