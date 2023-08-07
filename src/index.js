import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainlayout from './components/Mainlayout';
import About from './components/About';
import Ayyad from './components/Acontact';
import Acontact from './components/Acontact';
import Latest from './components/Latest';
import Latestnew from './components/Latestnew';
import Servicespage from './components/Servicespage';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Mainlayout/>

 <Acontact/>
 <About/>p
<Latest/>
<Latestnew/>
<Servicespage/> */}
<BrowserRouter>

<App/>
</BrowserRouter>

</React.StrictMode>

);

