import { FlexBoxCard } from './components/FlexBoxCard';
import { SettingsData } from './SettingsData';
import  Buscador  from './Buscador';

const SettingsData2 = SettingsData.filter( (item) => item.title.includes('Sat'))

export const SettingsPage = () => {

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
			
			<div className="horizontal-tabs">
			<a href="#">Detalles</a>
			<a href="#">Perfil</a>
			<a href="#">Claves</a>
			<a href="#">Plan </a>
			<a href="#">Billing</a>
			<a href="#">Seguridad </a>
			<a href="#">Notificaciones</a>
			<a href="#" className="active">Modulos</a>
			<a href="#">API</a>
			</div>
			
			<div className="content-header">
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
					<div className= "container-fluid">
							<div className= "row  mb-6" style={{ display: "flex", flexDirection: "row" }}>
								<div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
									
									{SettingsData.map((item) => {
					
										return (
										
										<FlexBoxCard 
										title= { item.title } 
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
							<div className= "card shadow border-0 flex" >
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
	</div>
    </>
  );
  
}
