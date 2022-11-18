import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import RestaurantHomePage from "./components/pages/RestaurantHomePage/RestaurantHomePage";
import Restaurants from "./components/pages/Restaurants/Restaurants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="homePage_restaurants_page" element={<RestaurantHomePage />} />
          <Route path="homePage_restaurants_:sub_menu" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
