import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {useMatch, useNavigate} from "react-router-dom";
import {editProduct, getProduct} from "../../Redux/Actions/product";

const Edit = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();
  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  });
  const handleEdit = (e) => {
    dispatch(editProduct(match.params.id, newProduct));
    navigate(-1);
  };

  return (
    <div>
      <Card style={{width: "21rem"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Form.Label>Food Title :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.title}`}
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.description}`}
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.price}`}
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <Button
            variant="secondary"
            size="lg"
            type="submit"
            onClick={handleEdit}>
            Edit Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Edit;
