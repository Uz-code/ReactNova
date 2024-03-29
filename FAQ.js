
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { MainHeader } from './components/MainHeader';
import { Wrapper } from './components/Wrapper';
import { useState, useEffect } from 'react';
import { LoadingComponent } from './components/LoadingComponent';
import { Separador } from './components/Separador';

export const Template = () => {

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
	 
  return (
		<Wrapper>
			<MainHeader>
				<h1> Titulo </h1>
			</MainHeader>
		
			<Separador>
				<ContainerFlex half={false} >
					<Card>
						<div className="center flex" style={{minHeight: '60vh'}}>
							<LoadingComponent loading={loading} type="envelope" >
							<div className='FAQ'>
							<div id="accordion-collapse" data-accordion="collapse">
									<h2 id="accordion-collapse-heading-1">
										<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
										<span>Que es un Usuario controlado?</span>
										<svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
										</button>
									</h2>
									<div id="accordion-collapse-body-1" class="bg-white-100" aria-labelledby="accordion-collapse-heading-1">
										<div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
										<p class="mb-2 text-gray-500 dark:text-gray-400">Los usuarios controlados son aquellos cuya actividad en un sistema informático está limitada por políticas de seguridad establecidas, como acceso a solo ciertos recursos y rutinas de seguridad obligatorias. </p>
										<p class="text-gray-500 dark:text-gray-400">Esto ayuda a garantizar que un sistema informático no sea explotado por <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">usuarios maliciosos</a> o malintencionados.</p>
										</div>
									</div>
									<h2 id="accordion-collapse-heading-2">
										<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
										<span>Is there a Figma file available?</span>
										<svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
										</button>
									</h2>
									<div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
										<div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
										<p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
										<p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
										</div>
									</div>
									<h2 id="accordion-collapse-heading-3">
										<button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
										<span>What are the differences between Flowbite and Tailwind UI?</span>
										<svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
										</button>
									</h2>
									<div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
										<div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
										<p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
										<p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
										<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
										<ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
											<li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
											<li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
										</ul>
										</div>
									</div>
									</div>
							</div>
							</LoadingComponent>
						</div>
					</Card>
				</ContainerFlex>
			</Separador>
		</Wrapper>
	  );	
}
