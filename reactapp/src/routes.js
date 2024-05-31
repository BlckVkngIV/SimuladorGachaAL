import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Error404 from './Components/Error/404';
import Search from './Components/Search/Search';
import Inventory from './Components/Inventory/Inventory';
import Favorites from './Components/Favorites/Favorites';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;