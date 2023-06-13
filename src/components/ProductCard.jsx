import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.images[0]} />
    <Card.Body>
      <Card.Title>product.title</Card.Title>
      <Card.Text>product.desciption</Card.Text>
      <link to={`/item/${productData.id}`}>Ir a Detalle</link>
    </Card.Body>
  </Card>
  )
}

export default ProductCard