import React,{ useState } from 'react'

 const Buscador = () => {
	 
	const [inputValue,setInputValue] = useState('');
	const handleInputChange= (e) => {
		setInputValue( e.target.value)
	}
	
	const handleSubmit= (e) => {
		e.preventDefault();
		console.log("Submit Hecho");
	}
	
	return (
		<form onSubmit = {handleSubmit}>
		<h1> {inputValue}</h1> 
		<input
			type="text"
			value= { inputValue }
			onChange = { handleInputChange }
		/>
		</form> 
	);
  
}
export default Buscador;