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

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Mens' element={<Mens/>}></Route>
        <Route path='/Womens' element={<Womens/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Order' element={<Order/>}></Route>
        <Route path='*' element={<NoUrl/>}></Route>
      </Routes>
      {/* <Navbar/>
      <Home/> */}
      {/* <Login/>
      <Signup/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
