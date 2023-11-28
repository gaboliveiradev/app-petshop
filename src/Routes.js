import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './layout/Sidebar';

const Routing = () => {

    return (
        <Routes>
            <Route element={<Login />} path='/login' exact />
            <Route element={<Sidebar />} path='/' exact />
        </Routes>
    )
}

export default Routing;