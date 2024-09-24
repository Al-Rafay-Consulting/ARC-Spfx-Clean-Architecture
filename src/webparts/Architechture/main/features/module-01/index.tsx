import * as React from 'react';
import CaseCreate from './components/container/CustomerCreate';
import { Route, Routes } from 'react-router-dom';
import CaseListing from './components/container/CustomerListing';

export default class CustomerManagement extends React.Component {
    public render() {

        return (
            <Routes>
                <Route path="/create" element={<CaseCreate />} />
                <Route path="/list" element={<CaseListing />} />
            </Routes>
        );
    }
}
