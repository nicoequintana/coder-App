import React from 'react';
import ItemCount from './ItemCount';



export default function ItemListContainer() {

    let productos = ['Nike', 'Adidas', 'Puma']
    let stock = 10

    function onAdd(cuanto) {

        alert(cuanto)

    }

  return (
    <>
       <ItemCount onAdd={onAdd} stock={stock}/> 
    </>

  );
}

