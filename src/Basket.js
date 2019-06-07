import React from 'react';

const Basket = (props) => {
  return (
    <section class="shopping-cart">
      <p>Shopping Cart</p>
      <ul>
        {props.basketItems.map((phoneId, index) => (
          <li class="shopping-cart__list-item">
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
