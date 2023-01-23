import { createSlice } from '@reduxjs/toolkit'
import OrderCardProps from '../components/cards/OrderCard/OrderCardPorps';

export interface OrdersState {
    count:number,
    ordersList: OrderCardProps[];
}

const initialState: OrdersState = {
    count:0,
    ordersList:[]
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, actions) => {
            state.count += 1;
            state.ordersList = [...state.ordersList, actions.payload]
        },
        setOrders: (state, actions) => {
            state.ordersList = actions.payload;
            state.count = state.ordersList.length;
            console.log(state.count, state.ordersList)
        }
    },
})

const { actions, reducer } = ordersSlice;

export const {addOrder, setOrders} = actions;
export const ordersReducer = reducer;