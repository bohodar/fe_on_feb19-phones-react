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

const Viewer = (props) => {

  return (
    <div>
      <div className="gallery">
        <button className="left" onClick={rightScroll}>{String.fromCharCode(8656)}</button>
        <div className="gallery--inner">
          <table className="gallery--table">
            <tbody>
              <tr>
                {props.phone.images.map(imgLink => (
                    <td><img className="gallery-img" src={imgLink} alt="Phone-picture" /></td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
        <button className="right" onClick={leftScroll}>{String.fromCharCode(8658)}</button>
      </div>
      <button onClick={props.onBack}>Back</button>
      <button onClick={() => (props.onAddingItem(props.phone.id))}>Add to basket</button>

      <h1>{props.phone.name}</h1>
      <p>{props.phone.description}</p>

      <ul className="phone-thumbs">
        { props.phone.images.map(imageUrl => (
          <li>
            <img src={imageUrl} />
          </li>
        )) }
      </ul>
    </div>
  )
};


export default Viewer