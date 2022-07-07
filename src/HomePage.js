import React, {useState} from 'react'	
import { AddCategory } from './agregarCategoria'
import { GifGrid } from './GifGrid'

export const HomePage2 = () => {

  const [categories,setCategories] = useState([]);
 
  return (
    <>
		<div className= "App-header">
		<h2 >
			Get Gifs Api
		</h2>
		<AddCategory setCategories = {setCategories}/>
			{
				categories.map( (category) => (
					
					<GifGrid 
					key = {category}
					category = {category}
					/>
					
				))
			}
      </div>
    </>
  );
  
}
