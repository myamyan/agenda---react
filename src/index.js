import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Agenda from './pages/home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Agenda />} />

        {/* <Route path='/inserir' element={<Inserir />}/> */}


      </Routes>

    </BrowserRouter>

    <Agenda />
  </React.StrictMode>
);

