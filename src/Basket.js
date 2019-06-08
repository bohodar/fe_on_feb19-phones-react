import React from 'react';

const Basket = (props) => {
  return (
    <section className="shopping-cart">
      <p>Shopping Cart</p>
      <ul>
        {props.basketItems.map((phoneId, index) => (
          <li className="shopping-cart__list-item">
            <span>{phoneId}</span>
            <button onClick={() => props.onRemovingItem(index)} >x</button>
          </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Basket;
