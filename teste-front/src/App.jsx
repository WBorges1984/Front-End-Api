import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home/home'));


localStorage.setItem("Carrinho", "S")

const App = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      
        
        
      </Routes>
    </Suspense>
  </Router>
);

export default App;
