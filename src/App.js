import React, {useEffect,useCallback, useState} from 'react';
import './App.css';

import { Menu } from './Menu';
import { Navbar } from './NavBar';
import { HomePage2 } from './HomePage';
import { RecursosAsignados } from './RecursosAsignados';
import { Verificaciones } from './Verificaciones';
import { TablaFetchData } from './TablaFetchData';
import { PageExamples } from './PageExamples';
import { SettingsPage } from './SettingsPage';
import { ReporteAuditoria } from './ReporteAuditoria';
import { EditUser } from './EditUser';
import { SearchForUser } from './SearchForUser';
import { PostData } from './PostData';
import { LogIn } from './LogIn';
import { useAuth } from './components/Auth';
import { RequiredAuth } from './components/RequiredAuth';

import { BrowserRouter as Router,
		Routes,
		Route,
		} from "react-router-dom";

const App = () => {
	
const auth = useAuth();

 const [sidebar, setSidebar] = useState(false);

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && sidebar) {
        setSidebar(false);
      }
    },
    [setSidebar, sidebar]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
	
return (
    <>
		<Router>
			<Menu setSidebar={setSidebar} sidebar={sidebar} />
			{ 
				auth.user && <Navbar sidebar={sidebar} setSidebar={setSidebar} />	
			}
			<Routes>
				<Route exact path= "/" element={<RequiredAuth><HomePage2/></RequiredAuth>} />
				<Route exact path= "/RecursosAsignados" element={<RequiredAuth><RecursosAsignados/></RequiredAuth>} />
				<Route exact path= "/Verificaciones" element={<RequiredAuth><Verificaciones/></RequiredAuth>} />
				<Route exact path= "/TablaFetchData" element={<RequiredAuth><TablaFetchData/></RequiredAuth>} />
				<Route exact path= "/PageExamples" element={<RequiredAuth><PageExamples/></RequiredAuth>} />
				<Route exact path= "/SettingsPage" element={<RequiredAuth><SettingsPage/></RequiredAuth>} />
				<Route exact path= "/ReporteAuditoria" element={<RequiredAuth><ReporteAuditoria/></RequiredAuth>} />
				<Route exact path= "/SearchForUser" element={<RequiredAuth><SearchForUser /></RequiredAuth>} />
				<Route exact path= "/EditUser" element={<RequiredAuth><EditUser/></RequiredAuth>} />
				<Route exact path= "/PostData" element={<RequiredAuth><PostData/></RequiredAuth>} />
				{!auth.user ? <Route exact path= "/LogIn" element={<LogIn/>} /> : <Route exact path= "/LogIn" element={<RequiredAuth><HomePage2/></RequiredAuth>} />}
				
				<Route
					path="*"
					element={<RequiredAuth>
						<>
							<div className="center">
								<div className="task-box red">
									<div className="description-task">
										<div className="time">---------</div>
										<div className="task-name">Error 404</div>
									</div>
								</div>
							</div>  	
						</>
					</RequiredAuth>
					}	
				/>
			</Routes>
		</Router>
    </>
  );
}
export default App;
