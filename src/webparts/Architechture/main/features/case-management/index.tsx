import * as React from "react";
import { Route, Routes } from "react-router-dom";
import CaseManagementLanding from "./components/container/CaseManagementLanding";

export default class CaseManagement extends React.Component {
  public render() {
    return (
      <Routes>
        <Route path="/" element={<CaseManagementLanding />} />
      </Routes>
    );
  }
}
