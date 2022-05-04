
import './App.css';

// import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from "react-router-dom";

import { DiningMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningMainPage";
import { ProductDetails } from './components/ProductDetailsPage/ProductDetails';
import { FurnitureLanding } from './components/ProductLandingPage/FurnitureLandingPage/FurnitureLanding';

function App() {
  return (
    <div className="App">
      {/* Hello To The MERN Stack Project */}
      {/* <button className="btn btn-primary">Click Me</button> */}
      <Routes>
        <Route path="/Dining-Room-Bar-Furniture" element = {<DiningMainPage />}></Route>
        <Route path="/ProductDetails/:area/:id" element = {<ProductDetails />}></Route>
        <Route path="/Product" element = {<FurnitureLanding />}></Route>
      </Routes>
    </div>
  );
}

export default App;
