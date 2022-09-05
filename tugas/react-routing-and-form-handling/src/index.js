import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/about/Contact';
import Profile from './pages/about/Profile';
import ListContact from './pages/about/contact/ListContact';
import Whatsapp from './pages/about/contact/listContact/Whatsapp';
import Facebook from './pages/about/contact/listContact/Facebook';
import Instagram from './pages/about/contact/listContact/Instagram';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='about/contact' element={<Contact />} />
          <Route path='about/contact/list-contact' element={<ListContact />} />
          <Route path='about/contact/list-contact/whatsapp' element={<Whatsapp />} />
          <Route path='about/contact/list-contact/facebook' element={<Facebook />} />
          <Route path='about/contact/list-contact/instagram' element={<Instagram />} />
          <Route path='about/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
