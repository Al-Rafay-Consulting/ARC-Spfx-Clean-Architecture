import * as React from "react";
import { Route, Routes } from "react-router-dom";
import CasesListing from "./components/container/CasesListing";

export default class CaseManagement extends React.Component {
  public render() {
    return (
      <Routes>
        <Route path="/list" element={<CasesListing />} />
      </Routes>
    );
  }
}
