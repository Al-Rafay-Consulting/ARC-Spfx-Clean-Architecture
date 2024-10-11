import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import EmployeeManagement from "../../features/employee";
import CustomerManagement from "../../features/module-01";
import FileUploader from "../../features/module-01/components/presentation/fileUploader";
import NavBar from "../../shared/components/Navbar/Navbar";

function AppRoutes() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<CustomerManagement />} /> */}
        <Route path="/module-01/*" element={<CustomerManagement />} />
        <Route path="/employee/*" element={<EmployeeManagement />} />
        <Route path="/fileUploader" element={<FileUploader />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
