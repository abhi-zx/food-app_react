import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/Cart.jsx';
import Navigation from './components/Navigation'
import SingleProduct from './pages/SingleProduct'
import Product from './pages/Product'
function App() {
  return (
    <> 
    {/* <Route exact  path="/"element={<Home/>}></Route> */}
     <Router>
       <Navigation/>
       <Routes>
         <Route exact  path="/"element={<Home/>}></Route>
         {/* <Route exact  path="/about"element={<About/>}></Route> */}
         <Route exact  path="/product"element={<Product/>}></Route>
         <Route exact  path="/product/:_id"element={<SingleProduct/>}></Route>
         {/* <Route exact  path="/cart"element={<Cart/>}></Route> */}
        </Routes>
     </Router>
     {/* <About/>
     <Home/> */}
    </>
  );
}

export default App;
