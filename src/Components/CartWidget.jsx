import React from 'react';
import CartIcon from '../assets/img/cartIcon.png';

export default function CartWidget() {

  return (
      <span>
          <img src={CartIcon} alt="icono de carrito de compras" />
      </span>

  );
}