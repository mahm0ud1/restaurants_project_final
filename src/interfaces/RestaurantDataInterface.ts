import DishData from './DishCardDetails'

interface RestaurantDataInterface {
    id: number
    imageUrl: string
    name: string
    about: string
    created_date: number
    rate: number
    timeOpen: TimeOpen[]
    dishes: DishData[]
}

export interface TimeOpen {
    day: string
    from: string
    to: string
}

export default RestaurantDataInterface;