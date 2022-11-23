import DishsCards from "../../cards/DishsCards/DishsCards";
import RestaurantsCards from "../../cards/RestaurantsCards/RestaurantsCards";
import AboutUs from "../AboutUs/AboutUs";
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import HeroPicture from "../HeroPicture/HeroPicture";
import SignaturesList from "../SignaturesList/SignaturesList";

const Home = () => {
    return (
        <>
            <HeroPicture />
            <RestaurantsCards />
            <DishsCards />
            <SignaturesList />
            <ChefOfTheWeek />
            <AboutUs />
        </>
    );
}

export default Home;