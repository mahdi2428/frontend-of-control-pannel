import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './page/Home';
import { BrowserRouter } from 'react-router-dom';
import Slider from './component/Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // {/* <Slider/> */}
  //   {/* <BrowserRouter>
  //     <Home/>
  //   </BrowserRouter> */}
  // {/* </React.StrictMode> */}
    <App /> , 
    
);

