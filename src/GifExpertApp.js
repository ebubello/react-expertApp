//rafc para generar el componente automaticamente.

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
  const [categories, setCategories] = useState(['One Punch']);

  //   const handleAdd = () => {
  //     setCategories([...categories, 'HunterXHunter']); //Forma correcta de mutar el State.

  //     //Otra Opción valida
  //     //setCategories((cats) => [...cats, 'HunterXHunter']);
  //   };

  return (
    <>
   
      <h2>GifExpertApp</h2>
      {/* Recibo desde el componente addCategories, input el nuevo valor agregado a categories */}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Boton</button> */}
      <ol>
        {categories.map((categories) => (
          <GifGrid key={categories} category={categories} />
        ))}
      </ol>
    
    </>
  );
};
