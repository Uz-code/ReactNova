import React from 'react';
import './index.css';
import App from './App';
import { AuthProvider } from './components/Auth';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<AuthProvider>
    <App tab="home" />
</AuthProvider>
);
