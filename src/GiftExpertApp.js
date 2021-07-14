import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GiftExpertApp = ({titulo}) => {

    const [categories, setCategories] = useState(['one punch']);
 
    // esta función se llamaba con este botón button onClick={handleApp}>Agregar</button> 
    //que iba dentro del return...
    //const handleApp = () => {
        //aplico el spread, para agregar un nuevo elemento
    //    setCategories([...categories,'nuevo elemento']);
    //};
    //<li key={category}>{category}</li> este li iba dentro del ol del category.map

    return (
        <>
            <h2>{titulo}</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map(category => 
                         <GifGrid
                            key={category} 
                            category={category} />
                    )
                }
            </ol>

        </>);
}

GiftExpertApp.propTypes = {
    titulo: PropTypes.string.isRequired
}

GiftExpertApp.defaultProps = {
    titulo: 'GiftExpertApp'
};

export {GiftExpertApp};