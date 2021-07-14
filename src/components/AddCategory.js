import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputValue = (e) => {
        setInputValue(e.target.value)};

    const handleSumit = (e) => {
        //prevengo el comportamiento por defecto del formulario
        e.preventDefault();

        if (inputValue.trim().length > 2){
            //para que pueda viajar el array, aplico este callback si no me da error..
            setCategories(categories => [inputValue, ...categories]);
            //valido que no ingrese el mismo valor 2 veces
            setInputValue('');}
    };

    return (
        <form onSubmit={handleSumit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputValue}
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}