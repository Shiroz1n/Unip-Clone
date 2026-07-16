import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainMenu from './components/Pages/MainMenu';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Carteirinha from './components/Carteirinha/Carteirinha';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/MainMenu' element={<MainMenu />}/>
          <Route path='/Carteirinha' element={<Carteirinha/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;