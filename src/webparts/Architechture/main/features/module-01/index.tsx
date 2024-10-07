import * as React from 'react';
import CustomerCreate from './components/container/CustomerCreate';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/container/Todos';

export default class CustomerManagement extends React.Component {
    public render() {
        return (
            <Routes>
                <Route path="/" element={<CustomerCreate />} />
                <Route path="/create" element={<CustomerCreate />} />
                <Route path="/list" element={<Todos />} />
            </Routes>
        );
    }
}
