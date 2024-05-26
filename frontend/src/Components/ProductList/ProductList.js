import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/product";
import ProductCard from "../ProductCard/ProductCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./ProductList.css";

const ProductList = () => {
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="list-product-align">
      {load ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        listProducts.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;
