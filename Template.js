
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { MainHeader } from './components/MainHeader';
import { Wrapper } from './components/Wrapper';
import { useState, useEffect } from 'react';
import { LoadingComponent } from './components/LoadingComponent';
import { Separador } from './components/Separador';

export const Template = () => {

	const delay = ms => new Promise(res => setTimeout(res, ms));

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await delay(2000);
			setLoading(false);
		};
		fetchData();
	}, []);
	 
  return (
		<Wrapper>
			<MainHeader>
				<h1> Titulo </h1>
			</MainHeader>
		
			<Separador>
				<ContainerFlex half={false} >
					<Card>
						<div className="center flex" style={{minHeight: '60vh'}}>
							<LoadingComponent loading={loading} type="envelope" >
								<h1>Content</h1>
							</LoadingComponent>
						</div>
					</Card>
				</ContainerFlex>
			</Separador>
		</Wrapper>
	  );	
}
