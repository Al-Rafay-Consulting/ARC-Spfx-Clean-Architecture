import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../shared/components/Navbar/Navbar';
import CustomerManagement from '../../features/module-01';
import CustomerManagement2 from '../../features/module-02';

function AppRoutes() {

    return (
        <HashRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<CustomerManagement />} />
                    <Route path="/module-01/*" element={<CustomerManagement />} />
                    <Route path="/module-02/*" element={<CustomerManagement2 />} />
                </Routes>
        </HashRouter>
    );
}

export default AppRoutes;