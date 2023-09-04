import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/home/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}