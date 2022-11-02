import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout/Layout';
import Home from './pages/Layout/Home/Home';
import Products from './pages/Products/Products';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => console.log(data))
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
