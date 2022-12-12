import { FlexBoxCard } from './components/FlexBoxCard';
import { SettingsData } from './SettingsData';
import  Buscador  from './Buscador';
import React, { useState } from 'react';
import  Tabs  from './components/Tabs';

const SettingsData2 = SettingsData.filter( (item) => item.title.includes('Sat'))

export const SettingsPage = () => {
	const [toggleState, setToggleState] = useState(6);

	const toggleTab = (index) => {
	  setToggleState(index);
	};

  return (
    <>
	<div className= "App-header App-body">

		<div className= "responsive-wrapper  container-fluid VietnamPro-Font">
			<div className= "main-header">
				<h1>Settings</h1>
				<div className="search">
					<Buscador/>
				</div>
			</div>

			<Tabs> 
				<div label = "Detalles" >
					<div className="content-header-noborder">
						<div className="content-header-intro">
							<h2>Integracion de aplicaciones interconectadas</h2>
							<p>Supercharge your workflow and connect the tool you use every day.</p>
						</div>
						<div className="content-header-actions">
							<a href="#" className="button">
								<i className="ph-faders-bold"></i>
								<span>Filtros</span>
							</a>
						</div>
					</div>
				
					<div className='content' >
						<div className='content-panel' >
							<div className="vertical-tabs">
									<a href="#" className="active">View all</a>
									<a href="#">Developer tools</a>
									<a href="#">Communication</a>
									<a href="#">Productivity</a>
									<a href="#">Browser tools</a>
									<a href="#">Marketplace</a>
								</div>
							</div>

							<div className="content-main">
								<div className= "container-left">
									<div className= "row  mb-6" style={{ display: "flex", flexDirection: "row" }}>
										<div className= "col-xl-3 col-sm-6 col-12 start-section " style={{  flex:1 }}>
										
										{SettingsData.map((item,index) => {
						
											return (
											
											<FlexBoxCard 
											title= { item.title } 
											key = { index }
											subtitle= { item.subtitle }
											img =  { item.img }
											checkboxState =  { item.checkbox }
											/>
												
											);
										})}
										
									</div>
								</div>
							</div>

						</div>
					</div>

					<div className= "main py-6 bg-surface-secondary">
						
						<div className= "container-fluid">
							<div className= "row mb-6 pb-5" style={{ display: "flex", flexDirection: "row" }}>
								<div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
									<div className= "card mh-2 shadow border-0 flex" >
										<div className="card-header">
											<div>
												<span>
												</span>
												<h3>Configuracion Principal</h3>
											</div>
										</div>
										<div className="card-header">
											<div>
												<span>
												</span>
												<p>Opcion 1</p>
											</div>
											<label className="toggle" style={{ paddingTop: "10px"}}>
												<input type="checkbox"/>
												<span></span>
											</label>
										</div>
										<div className="card-header">
											<div>
												<span>
												</span>
												<p>Opcion 2</p>
											</div>
											<label className="toggle" style={{ paddingTop: "10px"}}>
												<input type="checkbox"/>
												<span></span>
											</label>
										</div>
										<div className="card-header">
											<div>
												<span>
												</span>
												<p>Opcion 3</p>
											</div>
											<label className="toggle" style={{ paddingTop: "10px"}}>
												<input type="checkbox"/>
												<span></span>
											</label>
										</div>
										<div className="card-footer">
											<a href="#">Ver más</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>

				<div label = "Perfil" ></div>

				<div label = "Claves" ></div>

				<div label = "Plan" ></div>

				<div label = "Billing" ></div>

				<div label = "Seguridad" ></div>

				<div label = "Notificaciones" ></div>

				<div label = "Modulos" ></div>

				<div label = "API" ></div>

			</Tabs>
		</div>
	</div>
    </>
  );
  
}
