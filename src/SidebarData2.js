import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
		
export const SidebarData2 = [
	,
	{
	  title: 'Recursos Asignados',
	  path: '',
	  subNav: [
		  {
		   title: 'Sobres Normales',
		   path: './TablaFetchData',
		   subNav: []
		  },
		  {
		   title: 'Conexiones Directas',
			path: '',
			subNav: [
			  {
			   title: 'Sobres Conexion Directa',
			   path: ''
			  },
			  {
			   title: 'Sobres Protegidos',
				path: ''
			  }
		  ]
		  },
		  {
		   title: 'Sobres de Ejecución',
			path: '',
			subNav: [
			  {
			   title: 'Conexión a Grupos',
			   path: ''
			  },
			  {
			   title: 'Ejecución de Scripts',
				path: ''
			  }
			  ]
		  },
		  {
		   title: 'Copias SCP',
			path: '/Verificaciones',
			subNav: []
		  },
		  {
		   title: 'Favoritos',
		   path: '/Verificaciones',
			subNav: []
		  }
	  ]
	}
];