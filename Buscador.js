import React,{ useState } from 'react'

 const Buscador = () => {
	 
	const [inputValue,setInputValue] = useState('');
	const handleInputChange= (e) => {
		setInputValue(e.target.value)
	}
	
	const handleSubmit= (e) => {
		e.preventDefault();
	}
	
	return (
		<form onSubmit = {handleSubmit}>
	
		</form> 
	);
  
}
export default Buscador;
