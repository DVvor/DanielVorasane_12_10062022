import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'

//Pages
import Dashboard from './Pages/Dashboard/Dashboard'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Layout />}>
            <Route index element={<Navigate to="/user/12"></Navigate>} /> {/* by default user(12) */}
            <Route index path='/user/:id' element={<Dashboard />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;