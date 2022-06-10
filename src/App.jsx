import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

//Pages
import Dashboard from './pages/Dashboard/Dashboard'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Layout from './components/Layout/Layout';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;