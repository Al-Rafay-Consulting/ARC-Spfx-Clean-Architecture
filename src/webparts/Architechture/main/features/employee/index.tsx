import * as React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeRegistration from "./components/container/EmployeeRegistration";
import EmployeeView from "./components/presentation/EmployeeView";

export default class EmployeeManagement extends React.Component {
  public render() {
    return (
      <Routes>
        <Route path="/registration" element={<EmployeeRegistration />} />
        <Route path="/list" element={<EmployeeView />} />
      </Routes>
    );
  }
}
