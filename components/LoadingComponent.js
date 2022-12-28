
import { Loader } from './Loader';
import { useState, useEffect } from 'react';

export const LoadingComponent = ({ loading, type, children , centerTable }) => {
//type text or envelope

	let duration = 0;
	
	type === 'envelope' && (duration = 250);

	const delay = ms => new Promise(res => setTimeout(res, ms));

	const [showContent, setShowContent] = useState(false);


	useEffect(() => {
		const espera = async () => {
			await delay(duration);
			setShowContent(true);
		};
		(!loading) && espera();
	}, [loading]);
	 
  return (
		<>
		{!showContent ?

			<Loader isLoading={loading} delay= {duration} type={type} centerTable = {centerTable} />
			:
			<>
				{children}
			</>
		}
		</>
	  );	
}
