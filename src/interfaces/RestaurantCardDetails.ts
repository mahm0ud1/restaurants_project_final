interface RestaurantCardDetails {
  id: number
  imageUrl: string
  name: string
  about: string
  created_date: number
  rate: number
  timeOpen: TimeOpen[]
}

export interface TimeOpen {
  day: string
  from: string
  to: string
}

export default RestaurantCardDetails;