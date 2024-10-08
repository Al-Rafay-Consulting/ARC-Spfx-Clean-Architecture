import * as React from 'react';
import EmployeeRegistration from './components/container/EmployeeRegistration';
import { Route, Routes } from 'react-router-dom';
import CaseListing from './components/container/CustomerListing';

export default class EmployeeManagement extends React.Component {
    public render() {

        return (
            <Routes>
                <Route path="/registration" element={<EmployeeRegistration />} />
                <Route path="/list" element={<CaseListing />} />
            </Routes>
        );
    }
}
