import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);

  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-light w-full'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Carousel.Caption>
            <h3 className='text-center'>
              {product.name} (${product.price})
            </h3>
          </Carousel.Caption>
          <Link to={`/products/${product._id}`}>
            <Image
              className='d-block w-100'
              src={product.image}
              alt={product.name}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
