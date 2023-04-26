import './Index.css';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card.js';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function IndexPage() {
    const [ products, setProducts ] = useState([]);
  
    useEffect(() => {
        fetch('/ivi/data.json').then((response) => response.json()).then((result) => {
            setProducts(result);
            })
    }, []);

    return(
        <>
            <Header />
            <div className='Index-container'>
                {
                products.map((item, index) => {
                    return <Card key={index}
                                id={item.id}
                                name={item.name}
                                photo={item.photo}
                                films={item.films}
                                professions={item.professions} />
                })            
                }
                <Link to={ 'contacts' }>Контакты</Link>
            </div>
        </>
    )
}

export default IndexPage;