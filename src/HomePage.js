
import { FlexBoxCard } from './components/FlexBoxCard';
import { SettingsData } from './SettingsData';

export const HomePage2 = () => {

  return (
    <>
		<div className= "App-header">

			<div className= "responsive-wrapper container-fluid ">
				<div className= "main-header">
					<h1>Dashboard</h1>
				</div>
				
				<div className='content' >
					<div className="content-main">
						<div className= "container-fluid">
							<div className= "row g-6 mb-6" style={{ display: "flex", flexDirection: "row" }}>
								<div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
									
									{SettingsData.map((item, index) => {
					
										return (
										
										<FlexBoxCard 
										title= { item.title } 
										key= { index }
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

				<div className= "content-main">
					<div className= "row g-6 mb-6" style={{ display: "flex", flexDirection: "row" }}>
						<div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
							<div className= "card card-center shadow border-0 flex" >

								<table className="table ">
									<thead>
										<tr>
											<th scope="col">
												Sat Control Stage
											</th>
										</tr>
									</thead>
									<tbody className='table-body'>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-success"></i>Solicitudes Pendientes:
											</span>
											</td>
											<td></td>
											<td>1</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-warning"></i>Sesiones de Copia SCP Activas:
											</span>
											</td>
											<td></td>
											<td>0</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-success"></i>Sesiones de Conexion Windows Activas:
											</span>
											</td>
											<td></td>
											<td>1</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-success"></i>Sesiones de Conexion SSH/Telnet Activas:
											</span>
											</td>
											<td></td>
											<td>1</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-success"></i>Sesiones de Conexion de Aplicaciones Windows Activas:
											</span>
											</td>
											<td></td>
											<td>2</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-info"></i>Sobres Abiertos:
											</span>
											</td>
											<td></td>
											<td>30</td>
										</tr>
										<tr>
											<td>
											<span className="badge badge-lg badge-dot">
											<i className="bg-danger"></i>Sobres Vencidos:
											</span>
											</td>
											<td></td>
											<td>30</td>
										</tr>
									</tbody>
								</table>
										
								<div className="card-footer">
									<a href="#">Ver más</a>
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
