import { useContext, useState } from 'react'
import Input from './components/Input'
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import OffProductCard from './components/OffProductCard';
import OffProducts from './pages/OffProducts';
import HomeLayout from './layouts/HomeLayout';
import ForgotPass from './pages/ForgotPass';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import { ProductsContext } from './Contexts/Context';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const products = useContext(ProductsContext);
  const [count, setCount] = useState(0);
  const {theme, setTheme} = useState('light');
  return (
    <>
    <ProductsContext.Provider value={products}>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/forgot-pass' element={<ForgotPass />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </ProductsContext.Provider>
    </>
  )
}

export default App