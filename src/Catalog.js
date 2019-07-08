import React from 'react';

const Catalog = (props) => {
  return (
    <ul className="phones">
      { props.phones.map(phone => (
        <li className="thumbnail" key={phone.id} >
          <a
            href={'#' + phone.id}
            className="thumb"
            onClick={() => {
              props.onPhoneSelected(phone.id)
            }}
          >
            <img
              alt={phone.name}
              src={phone.imageUrl}
            />
          </a>

          <div className="phones__btn-buy-wrapper">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              className="viewer__button viewer__button--add"
              onClick={() => {
                props.onAddingItem(phone.name)
              }}
            >
              Add
            </a>
          </div>

          <a
            href={'#' + phone.id}
            onClick={() => {
              props.onPhoneSelected(phone.id)
            }}
            className="phone__name"
          >
            {phone.name}
          </a>

          <p>{phone.snippet}</p>
        </li>
      )) }
    </ul>
  );
};

export default Catalog;
