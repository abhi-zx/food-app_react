import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/Cart.jsx';
import Navigation from './components/Navigation'
import SingleProduct from './pages/SingleProduct'
import ProductPage from './pages/ProductPage'
import {CartContext} from './context/CartContext'
import {useEffect,useState} from 'react'
function App() {
  const [cart ,setCart]= useState({})

  useEffect(()=>{
    const cart = window.localStorage.getItem('cart');

  },[])
  return (
    <> 
    {/* <Route exact  path="/"element={<Home/>}></Route> */}
     <Router>
       <CartContext.Provider value={{name:"abhishek"}}>
       <Navigation/>
       <Routes>
         <Route exact  path="/"element={<Home/>}></Route>
         {/* <Route exact  path="/about"element={<About/>}></Route> */}
         <Route exact  path="/products"element={<ProductPage/>}></Route>
         <Route exact  path="/product/:_id"element={<SingleProduct/>}></Route>
         {/* <Route exact  path="/cart"element={<Cart/>}></Route> */}
        </Routes>
        </CartContext.Provider >
     </Router>
     {/* <About/>
     <Home/> */}
    </>
  );
}

export default App;
