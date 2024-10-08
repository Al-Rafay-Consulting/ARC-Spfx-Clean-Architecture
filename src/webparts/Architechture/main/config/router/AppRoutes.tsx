import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../shared/components/Navbar/Navbar';
import CustomerManagement from '../../features/module-01';
import EmployeeManagement from '../../features/employee';
import Todos from '../../features/module-01/components/container/Todos';

function AppRoutes() {

    return (
        <HashRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Todos />} />
                    <Route path="/module-01/*" element={<CustomerManagement />} />
                    <Route path="/employee/*" element={<EmployeeManagement />} />
                </Routes>
        </HashRouter>
    );
}

export default AppRoutes;