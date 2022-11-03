
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';

import logo from './logo.svg';
import React, { useState } from 'react';
import data from './data.json';

import './App.css';

function Table() {

    const [ categories, setCategories ] = useState([ '' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Tabla Usuarios</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            <table className="styled-table">
                <thead>
                    <tr className='thread-table'>
                        <th>fullname</th>
                        <th>adress</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ))
                }
                </tbody>
                </table>

           




        </>
    )

}

export default Table;