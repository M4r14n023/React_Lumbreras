import React from "react";
import { Button } from "react-bootstrap";

const CartButtons = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex w-25">
        <Button variant="outline-secondary" className="rounded-0">
          -
        </Button>
        <input
          type="text"
          className="form-control form-control-sm text-center rounded-0"
          placeholder="Cantidad custom"
          id="valueInput"
        />
        <Button variant="outline-secondary" className="rounded-0">
          +
        </Button>
      </div>
      <Button className="ml-2" variant="primary">
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;