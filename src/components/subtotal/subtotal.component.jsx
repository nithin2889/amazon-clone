import React from "react";
import "./subtotal.style.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../provider/state-provider";
import { getBasketTotal } from "../../provider/reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
