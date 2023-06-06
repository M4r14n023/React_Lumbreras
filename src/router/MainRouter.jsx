import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from '../pages/Products'
import NavBar from '../components/NavBar'
import ProductDetail from '../pages/ProductDetail'

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <NavBar/>
            <Route exact path="*" element={<Home />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:productsId" element={<ProductDetail />}/>
        </Routes>
    </Router>
  )
}

export default MainRouter