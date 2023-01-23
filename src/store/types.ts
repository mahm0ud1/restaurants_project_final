export interface IAppState {
    ordersCount: number;
    orders: Order[];
}

export interface Order {
    orderID: number;
}

export interface IIncrement {
    type: 'INCREMENT';
}

export type IAction = IIncrement;