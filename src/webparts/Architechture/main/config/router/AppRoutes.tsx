import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CaseManagement from "../../features/case-management";
import EmployeeManagement from "../../features/employee";
import CustomerManagement from "../../features/module-01";
import FileUploader from "../../features/module-01/components/presentation/fileUploader";
import NavBar from "../../shared/components/Navbar/Navbar";

function AppRoutes() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ textAlign: "center" }}>
                Welcome to ARC SPFx Clean Architecture
              </h1>
            </div>
          }
        />
        <Route path="/employee/*" element={<EmployeeManagement />} />
        <Route path="/case-management/*" element={<CaseManagement />} />
        <Route path="/module-01/*" element={<CustomerManagement />} />
        <Route path="/fileUploader" element={<FileUploader />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
