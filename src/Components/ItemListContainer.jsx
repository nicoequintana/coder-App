import React, { useState } from 'react';
import ItemCount from './ItemCount';



export default function ItemListContainer() {

    
    let stock = 10
    const [cant, setCant] = useState(1)
    
    //funcion con logica para sumar productos hasta stock disponible (stock)
    function add () {
        if (cant < stock){
            setCant(cant + 1)
        } else {
            alert('Maximo por compra alcanzado')
        }
        
    }

    //funcion con logica para sustraer productos hasta unidad minima
    function dec () {
        if (cant > 1) {
            setCant(cant - 1)
        } else {
            alert('No podes descartar mas productos')
        }
        
    }

    //funcion para agregar al carrito
    function addToCart() {
        alert(`Se agrego Producto1 por ${cant} al carrito`)
    }

  return (
    <>
       <ItemCount cant={cant} stock={stock} add={add} dec={dec} addToCart={addToCart}/> 
    </>

  );
}

