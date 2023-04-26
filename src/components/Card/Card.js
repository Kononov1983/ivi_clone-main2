import './Card.css';
import Button from '../Button/Button.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card({img, title, description, price, id}) {
  return (
      <Link to={`products/${id}`} className='Card'>
        <img className='Card-img' src={ img } />
        <div className='Card-container'>
          <h2 className='Card-title common-header'>{ title}</h2>
          <p className='Card-description'>{ description }</p>
          <div className='Card-price common-price'>{ price }</div>
          <div className='Card-button'>
            <Button text="Купить"/>
          </div>
        </div>
      </Link>
    )
}

export default Card;