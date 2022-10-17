import React, {useEffect,useCallback, useState} from 'react';
import './App.css';
import { Menu } from './Menu';
import { Navbar } from './NavBar';
import { HomePage2 } from './HomePage';
import { RecursosAsignados } from './RecursosAsignados';
import { Verificaciones } from './Verificaciones';
import { FormWithCustomHook } from './FormWithCustomHook';
import { TablaFetchData } from './TablaFetchData';
import { PageExamples } from './PageExamples';
import { SettingsPage } from './SettingsPage';

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
	  <Navbar sidebar={sidebar} />	
		<Routes>
		<Route exact path= "/" element={<HomePage2 />} />
		<Route exact path= "/RecursosAsignados" element={<RecursosAsignados />} />
		<Route exact path= "/Verificaciones" element={<Verificaciones />} />
		<Route exact path= "/FormWithCustomHook" element={<FormWithCustomHook />} />
		<Route exact path= "/TablaFetchData" element={<TablaFetchData />} />
		<Route exact path= "/PageExamples" element={<PageExamples />} />
		<Route exact path= "/SettingsPage" element={<SettingsPage />} />
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
