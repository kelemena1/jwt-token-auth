import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ItemsPage from './Components/ItemsPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/termekek" element={<ItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;