import React from 'react'

let currentX = 0;
const leftScroll = () => {
  const galleryRow = document.querySelector('.gallery--table');
  galleryRow.style.transform = `translateX(${currentX = Math.max(currentX - 400, -(galleryRow.clientWidth - 400))}px)`;
};
const rightScroll = () => {
  const galleryRow = document.querySelector('.gallery--table');
  galleryRow.style.transform = `translateX(${currentX = Math.min(currentX + 400, 0)}px)`;
};
const randomStr = require('randomstring');

const Viewer = (props) => {
  return (
    <div className="viewer">
      <div className="gallery">
        <button className="left" onClick={rightScroll}>{String.fromCharCode(8656)}</button>
        <button className="right" onClick={leftScroll}>{String.fromCharCode(8658)}</button>
        <div className="gallery--inner">
          <table className="gallery--table">
            <tbody>
              <tr>
                {props.phone.images.map(imgLink => (
                  <td key={randomStr.generate(3)}>
                    <img
                    className="gallery-img"
                    src={imgLink}
                    alt="Phone"
                    />
                  </td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="viewer__description">
        <div className="viewer__button-wrapper">
          <button
            onClick={props.onBack}
            className="viewer__button viewer__button--back"
          >
            Back
          </button>
          <button
            onClick={() => (props.onAddingItem(props.phone.id))}
            className="viewer__button viewer__button--add"
          >
            Add to basket
          </button>
        </div>
        <h1>{props.phone.name}</h1>
        <p>{props.phone.description}</p>

        <ul className="phone-thumbs">
          { props.phone.images.map(imageUrl => (
            <li key={randomStr.generate(4)}>
              <img src={imageUrl} alt="phone-thumb" />
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
};


export default Viewer