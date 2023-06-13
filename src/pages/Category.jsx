import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {ProductsData} from '../json/Products'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {categoryId} = useParams()

  const productsFilterByCategory = ProductsData.filter(products => products.category === categoryId);
  return 
      <ItemListContainer productsData={productsFilterByCategory}  />;
  
}

export default Category;