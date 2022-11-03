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
import {EditUser } from './EditUser';
import {SearchForUser } from './SearchForUser';
import  { PostData } from './PostData';
import OutsideClick from "./hooks/outsideClick";

import { BrowserRouter as Router,
		Routes,
		Route,
		} from "react-router-dom";

const App = () => {
	
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
	<Menu setSidebar={setSidebar} sidebar={sidebar} />	
	 <Router>
	  <Navbar sidebar={sidebar} setSidebar={setSidebar} />	
		<Routes>
		<Route exact path= "/" element={<HomePage2 />} />
		<Route exact path= "/RecursosAsignados" element={<RecursosAsignados />} />
		<Route exact path= "/Verificaciones" element={<Verificaciones />} />
		<Route exact path= "/TablaFetchData" element={<TablaFetchData />} />
		<Route exact path= "/PageExamples" element={<PageExamples />} />
		<Route exact path= "/SettingsPage" element={<SettingsPage />} />
		<Route exact path= "/ReporteAuditoria" element={<ReporteAuditoria />} />
		<Route exact path= "/SearchForUser" element={<SearchForUser />} />
		<Route exact path= "/EditUser" element={<EditUser />} />
		<Route exact path= "/PostData" element={<PostData />} />
		<Route
			path="*"
			element={
			<main>
				<div className="center">
					<div className="task-box red">
						<div className="description-task">
							<div className="time">10:00 - 11:00 AM</div>
							<div className="task-name">Error 404</div>
						</div>
						<div className="more-button"></div>
						<div className="members">
						</div>	
						</div>
					</div>  
			</main>
			}	
		/>
		</Routes>
    </Router>
    </>
  );
  
}
export default App;
