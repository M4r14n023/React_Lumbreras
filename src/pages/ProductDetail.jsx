import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {productsId} = useParams()
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail