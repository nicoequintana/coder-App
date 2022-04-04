import React, { useState } from 'react';
import '../App.css'
import ProductoPrueba from '../assets/img/productoPrueba.png'

export default function ItemCount( { onAdd, stock } ) {

    const [cant, setCant] = useState(1)

    //funcion con logica para sumar productos hasta stock disponible (stock)
    function add () {
        if (cant < stock){
            setCant(cant + 1)
        } else {
            alert('No hay productos en stock')
        }
        
    }

    console.log(cant)

    //funcion con logica para sustraer productos hasta unidad minima
    function dec () {
        if (cant > 1) {
            setCant(cant - 1)
        } else {
            alert('No podes descartas mas productos')
        }
        
    }

    //funcion para agregar al carrito
    function addToCart() {
        alert(`Se agrego Producto1 por ${cant} al carrito`)
    }


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

