import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {addProduct} from "../../Redux/Actions/product";
import {Link} from "react-router-dom";
import "./Add.css";

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };
  const add = () => {
    dispatch(addProduct(newProduct));
  };
  return (
    <div>
      <Card style={{width: "21rem"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Form.Label>Food Title :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Food product"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description of Food product"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <Link to="/Food-Product">
            <Button
              variant="primary"
              type="submit"
              onClick={() => add(newProduct)}>
              Add Product
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Add;
