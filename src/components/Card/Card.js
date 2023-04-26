import './Card.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card({id, name, photo, films, professions}) {
  return (
      <Link to={`products/${id}`} className='Card'>
        <div className='Card-container'>
          <h2 className='Card-title common-header'>{ id }</h2>
          <p className='Card-description'>{ name }</p>
          <div className='Card-price common-price'>{ photo }</div>
          <div className='Card-price common-price'>{ films }</div>
          <div className='Card-price common-price'>{ professions }</div>
        </div>
      </Link>
    )
}

export default Card;