import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/product';
import { Link } from 'react-router-dom';
import './Add.css';

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addProduct(newProduct));
  };
  return (
    <div className="add-menu">
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Body>
          <hr />
          <Form.Label>Food Title :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Food product"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description of Food product"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <hr></hr>
          <Link to="/menu">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => add(newProduct)}
              sx={{ mt: 3, mb: 2 }}>
              Add Product
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Add;
