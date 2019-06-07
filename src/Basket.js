import React from 'react';

const Basket = (props) => {
  return (
    <section class="shopping-cart">
      <p>Shopping Cart</p>
      <ul>
        {props.basketItems.map(phoneId => (
          <li class="shopping-cart__list-item">
            <span>{phoneId}</span> <button>x</button>
          </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Basket;
