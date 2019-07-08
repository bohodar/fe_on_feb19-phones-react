import React from 'react';

const randomStr = require('randomstring');

const Basket = (props) => {
  return (
    <section className="shopping-cart">
      <p>Shopping Cart</p>
      <ul>
        {props.basketItems.map((phoneId, index) => (
          <li className="shopping-cart__list-item" key={randomStr.generate(3)}>
            <span title={phoneId}>{phoneId}</span>
            <button onClick={() => props.onRemovingItem(index)} >x</button>
          </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Basket;
