
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { MainHeader } from './components/MainHeader';
import { Wrapper } from './components/Wrapper';
import { useState, useEffect } from 'react';
import { LoadingComponent } from './components/LoadingComponent';
import { Separador } from './components/Separador';
import { DataListContent2 } from './components/DataListContent2';
import { ListadoTarjetas } from './components/ListadoTarjetas';
import { FormCheckbox } from './components/FormCheckbox';

export const Mantenimiento = () => {

	const delay = ms => new Promise(res => setTimeout(res, ms));

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await delay(1500);
			setLoading(false);
		};
		fetchData();
	}, []);
	 
  return (
		<Wrapper>
			<MainHeader>
				<h1> Mantenimiento 🔨</h1>
			</MainHeader>
		
			<Separador>
				
				<ContainerFlex half={false} >

					<ContainerFlex half={false} paddingTop={false} >
						<Card>
						<LoadingComponent loading={loading} type="loader-1"  centerTable={true}>
								<ListadoTarjetas title={"Modulo SATCS"} 
									contentArray =
									{ [
										{ content1 : 'Aprobacion Multinivel de Sobres', content2 : '', content3 : 'Aprobacion de Varios Niveles', content4 : <><br></br></> , 
										  content5 : <FormCheckbox flex= {true} width="50%" label="" name="cambiarPassword" value={true} /> },
										  { content1 : 'Aprobacion Multinivel de Sobres', content2 : '', content3 : 'Aprobacion de Varios Niveles', content4 : <><br></br></> , 
										  content5 : <FormCheckbox flex= {true} width="50%" label="" name="cambiarPassword" value={true} /> },
										  { content1 : 'Aprobacion Multinivel de Sobres', content2 : '', content3 : 'Aprobacion de Varios Niveles', content4 : <><br></br></> , 
										  content5 : <FormCheckbox flex= {true} width="50%" label="" name="cambiarPassword" value={true} /> }
									]} 
								/>
							</LoadingComponent>
							
						</Card>
						
					</ContainerFlex>

					<div className='card-width'>
						<Card>
							<div className="center flex" style={{minHeight: '20vh'}}>
								<LoadingComponent loading={loading} type="loader-1" >
								<DataListContent2
									key={ 1} 
									address= { "SAT Control Stage Version 3.4.43"}
									fullName= { "SATSP5"}
									size={1}
								/>
								</LoadingComponent>
							</div>
						</Card>
						
						<Card>
							<div className="center flex" style={{minHeight: '20vh'}}>
								<LoadingComponent loading={loading} type="loader-1" >
								<DataListContent2
									key={ 1} 
									address= { "1"}
									size={1}
								/>
								</LoadingComponent>
							</div>
						</Card>
						<Card>
							<div className="center flex" style={{minHeight: '20vh'}}>
								<LoadingComponent loading={loading} type="loader-1" >
								<DataListContent2
									key={ 1} 
									address= { "1"}
									size={1}
								/>
								</LoadingComponent>
							</div>
						</Card>
					</div>
					
				</ContainerFlex>
			</Separador>
			
		</Wrapper>
	  );	
}
