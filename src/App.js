import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Kids from './components/Kids';
import Order from './components/Order';
import NoUrl from './components/NoUrl';
import Shirts from './components/Shirts';
import Pants from './components/Pants';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ShirtDetials from './components/ShirtDetials';
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Mens' element={<Mens/>}>
          <Route path='Shirts' element={<Shirts/>}/>
          <Route path='Pants' element={<Pants/>}/>
        </Route>
        <Route path='Womens' element={<Womens/>}/>
        <Route path='Kids' element={<Kids/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Order' element={<Order/>}/>
        <Route path='Product' element={<Product/>}>
          <Route path='Product Details' element={<ProductDetail/>}/>
          <Route path='Prodict Detials/:ProductId' element={<ProductDetail/>}/>
          <Route path='ShirtDetails' element={<ShirtDetials/>}/>
        </Route>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='*' element={<NoUrl/>}/>
      </Routes>
    </div>
  );
}

export default App;
