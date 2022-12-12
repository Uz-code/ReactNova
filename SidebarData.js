import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <RiIcons.RiHomeLine />,
    cName: 'nav-text',
	subNav: []
  },
  {
    title: 'Recursos Asignados',
    path: '',
    icon:  <svg width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox" viewBox="0 0 24 24">
            <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
           </svg>,
    cName: 'nav-text',
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
		 title: 'Sobres de Ejecución de Acciones',
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
  },
  {
    title: 'Verificaciones',
    path: '/Verificaciones',
    icon: <GrIcons.GrDocumentVerified />,
    cName: 'nav-text',
	subNav: []
  },
  {
    title: 'Recursos Controlados',
    path: '',
    icon: <GrIcons.GrResources />,
    cName: 'nav-text',
	subNav: [
		{
		 title: 'Usuarios Controlados',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Usuarios Administradores',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Sobres',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Archivos Unix',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Archivos Windows',
		 path: '/Verificaciones',
		  subNav: []
		}]
  },
  {
    title: 'Admininstracion',
    path: '/messages',
    icon:    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    cName: 'nav-text',
	subNav: [
		{
		 title: 'Tiempos de Uso de Sobres',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Políticas',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Tipificación de Motivos de Apertura',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Sistemas',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Modelos de Clave',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Definición de Scripts',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Ambientes SAP',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Dominios Azure AD',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Dominios Google Workspace',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Web Services',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Parametros Configuracion',
		 path: '/Verificaciones',
		  subNav: []
		}]
  },
  {
    title: 'Reportes',
    path: '/support',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-trash" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		  </svg>,
    cName: 'nav-text',
	subNav: [,
		{
		 title: 'Actividad de Sobres',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Usuarios Controlados',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Sobres',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Histórico de Claves',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Estadísticas SATCS',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Reporte Aperturas',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Auditoría',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Estadísticas',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Log Actividad del Servicio',
		 path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Detalle del Servicio',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Reportes Usuarios y Grupos',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Automatización de Reportes',
		 path: '/Verificaciones',
		  subNav: []
		}]
  },
  {
    title: 'Autorizaciones',
    path: '/support',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-sun" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="5"></circle>
			<path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
		  </svg>,
    cName: 'nav-text',
	subNav: [,
		{
		 title: 'Autorizacion SATCS',
		  path: '/Verificaciones',
		  subNav: []
		},
		{
		 title: 'Autorización SATWF',
		  path: '/Verificaciones',
		  subNav: []
		}]
  }
];