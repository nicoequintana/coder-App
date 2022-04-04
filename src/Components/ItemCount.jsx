import React from 'react';
import '../App.css'
import ProductoPrueba from '../assets/img/productoPrueba.png'

export default function ItemCount( { onAdd, stock, cant, addToCart, dec, add } ) {

    

  return (
    <>
        <div className='countContainer'>
            <div className='cardInfo'>
                <span>Producto 1</span>
                <img src={ProductoPrueba} />
            </div>
            <div className='btnContainer'>
                <button className='btnCounter' onClick={() => { dec () }}>-</button>
      
                <p className='showCant'>{cant}</p>

                <button className='btnCounter' onClick={() => { add () }}>+</button>

            </div>

            <button className='btnAddToCart' onClick={ ()=>{ addToCart() } }>Agregar al Carrito</button>
        </div>
        
    </>

  );
}

