import React from 'react';

const Catalog = (props) => {
  return (
    <ul className="phones-list">
      { props.phones.map(phone => (
        <li className="phones-list__thumbnail" key={phone.id} >
          <div className="phones-list__thumbnail__left side">
            <a
              href={'#' + phone.id}
              className="thumbnail__left__thumb"
              onClick={() => {
                props.onPhoneSelected(phone.id)
              }}
            >
              <img
                alt={phone.name}
                src={phone.imageUrl}
              />
            </a>
            <div className="phones-list__thumbnail__btn-buy-wrapper">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button
                className="viewer__button viewer__button--add"
                onClick={() => {props.onAddingItem(phone.name)}}
              >
                Add
              </button>
            </div>
          </div>
          <div className="phones-list__thumbnail__right side">
            <a
              href={'#' + phone.id}
              onClick={() => {
                props.onPhoneSelected(phone.id)
              }}
              className="thumbnail__left__modelname"
            >
              {phone.name}
            </a>
            <p>{phone.snippet}</p>
          </div>
        </li>
      )) }
    </ul>
  );
};

export default Catalog;
