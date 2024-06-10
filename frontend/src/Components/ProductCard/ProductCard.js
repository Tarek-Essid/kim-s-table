import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../Redux/Actions/product';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="my-listCards">
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <br></br>
          <Card.Title>{product.title}</Card.Title>
          <br></br>
          <Card.Text>{product.description}</Card.Text>
          <br></br>
          <Card.Text>{product.price}</Card.Text>
          <hr></hr>
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => dispatch(deleteProduct(product._id))}>
              Delete Product
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate(`/edit/${product._id}`)}>
              Edit Product
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
