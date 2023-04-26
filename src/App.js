import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import IndexPage from './pages/Index/Index.js';
import ContactsPage from './pages/Contacts/Contacts.js';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/Product/Product.js';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path={'contacts'} element={<ContactsPage />} />
          <Route path={'products'}>
            <Route path={':userId'} element={<ProductPage />} />
          </Route>
        </Route>        
      </Routes>
    </div>
  );
}

export default App;
