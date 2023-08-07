import React, { Component } from 'react';
import {  Route, Link, Routes } from 'react-router-dom';
import Acontact from "./components/Acontact";
import About from "./components/About";
import Latest from "./components/Latest";
import Latestnew from "./components/Latestnew";
import Servicespage from "./components/Servicespage";
import Mainlayout from "./components/Mainlayout";

class App extends Component {
  render() {
    return (
        
          <Routes>
              <Route exact path='/' element={<Mainlayout/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/Servicespage' element={<Servicespage/>} />
              <Route path='/Latestnew' element={<Latestnew/>} />
              <Route path='/Latest' element={<Latest/>} />
              <Route path='/Acontact' element={<Acontact/>} />
          </Routes>
    );
  }
}

export default App;





































// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import "./css/style.css";
// // import "./css/About.css";
// // import "./css/pageconact.css";
// // import "./css/pagelatest.css";
// // import "./css/pagelatestnew.css";
// // import "./css/pageservices.css";

// import Acontact from "./components/Acontact"
// import About from "./components/About"
// import Latest from "./components/Latest"
// import Latestnew from "./components/Latestnew"
// import Servicespage from "./components/Servicespage"
// import Mainlayout from "./components/Mainlayout";

// const router = createBrowserRouter([
//   {
//     path: '/Mainlayout',
//     element: <Mainlayout />
//   },
//   {
//     path: 'Acontact',
//     element: <Acontact />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/Latest',
//     element: <Latest />
//   },
//   {
//     path: '/Latestnew',
//     element: <Latestnew />
//   },
//   {
//     path: '/Servicespage',
//     element: <Servicespage />
//   },
// ])

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
