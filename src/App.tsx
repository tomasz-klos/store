import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout/Layout';
import Home from './pages/Layout/Home/Home';
import Products from './pages/Products/Products';

function App() {
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
