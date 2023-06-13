import React from 'react'
import ProductCard from '../components/ProductCard'

const ItemListContainer = ({productsData}) => {
  return (
    <div>
      {
        ProductsData.map(product => {
          return
          <ProductCard key={product.id} productsData={product}/>
        })
      }
    </div>
    
  )
}

export default ItemListContainer