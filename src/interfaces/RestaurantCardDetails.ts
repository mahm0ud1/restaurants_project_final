interface RestaurantCardDetails {
    id: number
  imageUrl: string
  title: string
  details: string
  timeOpen: TimeOpen[]
}

export interface TimeOpen {
  day: string
  from: string
  to: string
}

export default RestaurantCardDetails;