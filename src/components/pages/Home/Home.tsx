import DishsCards from "../../cards/DishsCards/DishsCards";
import RestaurantsCards from "../../cards/RestaurantsCards/RestaurantsCards";
import HeroPicture from "../HeroPicture/HeroPicture";

const Home = () => {
    return (
        <>
            <HeroPicture />
            <RestaurantsCards />
            <DishsCards />
        </>
    );
}

export default Home;