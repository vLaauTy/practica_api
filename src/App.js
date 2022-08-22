import { Footer, InfoSection, NavBar, Products } from "./components";
import GlobalStyle from "./GlobalStyles";
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import './index.css'
import { homeObjOne } from "./pages/HomePage/Data";
import Pricing from "./components/Pricing/Pricing";
import Home from "./pages/HomePage/Home";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/pricing" exact element={<Pricing/>}></Route>
        <Route path="/products" exact element={<Products/>}></Route>
      </Routes>
      <Footer/>
      
      <div>
        <h2>Datos: </h2>


      </div>
    </BrowserRouter>
  );
}

export default App;
