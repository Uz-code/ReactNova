
import { ContainerFlex } from './components/ContainerFlex';
import * as Icons from "@heroicons/react/outline";
import { MainHeader } from './components/MainHeader';
import { Wrapper } from './components/Wrapper';
import { useState, useEffect } from 'react';
import { LoadingComponent } from './components/LoadingComponent';
import { Separador } from './components/Separador';

export const SobresAutorizados = () => {

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
	 

	function handleClick() {
		console.log("intento mandar un mensaje")
		
		window.chrome.runtime.sendMessage('decgfomdnhoobkpcofigjcbhlfedpdnb',{ type: "FROM_REACT", text: "Hello from React!" });
	}

	useEffect(() => {
		const handleMessage = (event) => {
		  if (event.data.type && event.data.type === "FROM_EXTENSION") {
			console.log(event.data.text);
		  }
		};
		window.addEventListener("message", handleMessage);
		return () => {
		  window.removeEventListener("message", handleMessage);
		};
	  }, []);


  return (
		<Wrapper>
			<MainHeader>
				<a className="space-y-2 h-8 rounded text-2xl text-slate-600"	> Sobres Autorizados </a>
			</MainHeader>
				
			<div className="space-y-5 " >
			<div className="mx-auto flex w-full flex-1 overflow-hidden rounded-2xl bg-white " >
						<div className="flex  flex-col  py-2">
						<div className="border-b px-5">
							<div className="flex justify-between py-2 text-right">
							<a className="space-y-2 h-8 rounded text-2xl text-slate-400" >
								<LoadingComponent loading={loading} type="text" >
									Sobre de Conexion Windows
								</LoadingComponent>
							</a>
						
							<button
								className="-mx-2 border rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
							onClick={()=>handleClick()}
								>
								<Icons.CodeIcon className="h-5 w-5 " />
								</button>
								
							</div>
						</div>
						<ul className="px-3 pb-2 pt-2" style={{minHeight:'100px'}}>
							<LoadingComponent loading={loading} type="" >
								<div className="space-y-2" >
									{[...Array(2).keys()].map((i) => (
									<div key={i} className="space-y-2 text-sm">
										<p className="h-4 w-5/6 rounded bg-slate-100" />
										<p className="h-4 rounded bg-slate-100" />
									</div>
									))}
								</div>
							</LoadingComponent>
						</ul>
						</div>
						
					</div>
					
					<div className="mx-auto flex w-full flex-1 overflow-hidden rounded-2xl bg-white " >
						<div className="flex  flex-col  py-2">
						<div className="border-b px-5">
							<div className="flex justify-between py-2 text-right">
							<a className="space-y-2 h-8 rounded text-2xl text-slate-400" >
								<LoadingComponent loading={loading} type="text" >
									Sobre de Grupo Linux
								</LoadingComponent>
							</a>
						
							<button
								className="-mx-2 border rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
								>
								<Icons.MailIcon className="h-5 w-5 " />
								</button>
								
							</div>
						</div>
						<ul className="px-3 pb-2 pt-2" style={{minHeight:'80px'}}>
						<LoadingComponent loading={loading} type="" >
								<div className="space-y-2">
									{[...Array(1).keys()].map((i) => (
									<div key={i} className="space-y-2 text-sm">
										<p className="h-4 w-5/6 rounded bg-slate-100" />
										<p className="h-4 rounded bg-slate-100" />
										<p className="h-4 w-4/6 rounded bg-slate-100" />
									</div>
									))}
								</div>
							</LoadingComponent>
						</ul>
						</div>
					</div>

					<div className="mx-auto flex w-full flex-1 overflow-hidden rounded-2xl bg-white " >
						<div className="flex  flex-col  py-2">
						<div className="border-b px-5">
							<div className="flex justify-between py-2 text-right">
							<a className="space-y-2 h-8 rounded text-2xl text-slate-400" >
								<LoadingComponent loading={loading} type="text" >
									Sobre de Control de Claves
								</LoadingComponent>
							</a>
						
							<button
								className="-mx-2 border rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
								>
								<Icons.MailOpenIcon className="h-5 w-5 " />
								</button>
								
							</div>
						</div>
						<ul className="px-3 pb-2 pt-2"  style={{minHeight:'80px'}}>
						<LoadingComponent loading={loading} type="" >
								<div className="space-y-2">
									{[...Array(1).keys()].map((i) => (
									<div key={i} className="space-y-2 text-sm">
										<p className="h-4 w-5/6 rounded bg-slate-100" />
										<p className="h-4 rounded bg-slate-100" />
										<p className="h-4 w-4/6 rounded bg-slate-100" />
									</div>
									))}
								</div>
							
							</LoadingComponent>
						</ul>
						</div>
					</div>
			</div>
		</Wrapper>
	  );	
}
