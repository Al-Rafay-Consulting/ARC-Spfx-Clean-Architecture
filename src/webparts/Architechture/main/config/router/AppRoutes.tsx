import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../shared/components/Navbar/Navbar';
import CustomerManagement from '../../features/module-01';

function AppRoutes() {

    return (
        <HashRouter>
            <NavBar />
                <Routes>
                    <Route path="/module-01/*" element={<CustomerManagement />} />
                </Routes>
        </HashRouter>
    );
}

export default AppRoutes;