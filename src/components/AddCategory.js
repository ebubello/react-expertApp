import React, { useState } from 'react';
import PropsTypes from 'prop-types';

//Pasamos parametros por desestructuración desde AddCategories a GifExpertApp.
export const AddCategory = ({ setCategories }) => {
  //Manejo del estado del INPUT.
  const [inputValue, setinputValue] = useState('');

  //Input Change
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats]); //Add nuevo elemento al array de Categorias.
      setinputValue('');
    }
  };

  return (
    <>
    
      <form onSubmit={handleSubmit}>
     
        <input type='text' value={inputValue} onChange={handleInputChange} />
 
      </form>
      
    </>
  );

  // Para que si o si envien las propiedades necesarias.
};

// Para que si o si envien las propiedades necesarias.
AddCategory.propTypes = {
  setCategories: PropsTypes.func.isRequired,
};
