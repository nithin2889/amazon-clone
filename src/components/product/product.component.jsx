import React from "react";
import "./product.style.css";
import { useStateValue } from "../../provider/state-provider";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch some action (the items added to the basket) into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product display" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
