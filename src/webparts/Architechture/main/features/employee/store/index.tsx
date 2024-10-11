import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../config/redux/store";
import BasePnpService from "../../../shared/services/basePnp.service";
import { IEmployeeProps } from "../interfaces/IEmployeeProps";

const registerEmployeeHandler = async (formData: IEmployeeProps) => {
  const basePnpService = BasePnpService.getPersistentInstance();
  if (Array.isArray(formData?.Image)) {
    for (let img of formData?.Image) {
      const response: any = await basePnpService.createFile(
        img?.originFileObj,
        "Employees Documents"
      );
      formData.Image = response?.data?.ServerRelativeUrl;
    }
  }
  const response = await basePnpService.create("Employees", formData);
  return response;
};

export const registerEmployee = createAsyncThunk(
  "employees/registerEmployee",
  async (formData: IEmployeeProps, thunkAPI) => {
    const response = await registerEmployeeHandler(formData);
    return response.data;
  }
);

export const getRegisteredEmployees = createAsyncThunk(
  "employees/getRegisteredEmployee",
  async (_, thunkAPI) => {
    const response = await BasePnpService.getPersistentInstance().getAll(
      "Employees",
      ["*"]
    );
    return response.data;
  }
);

export const deleteRegisteredEmployee = createAsyncThunk(
  "employees/deleteRegisteredEmployee",
  async (itemID: number, thunkAPI) => {
    await BasePnpService.getPersistentInstance().delete("Employees", itemID);
    return itemID;
  }
);

export interface IEmployeeSlice {
  employees: IEmployeeProps[];
}
const initialState: IEmployeeSlice = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.employees = [...state.employees, action.payload];
      })
      .addCase(getRegisteredEmployees.fulfilled, (state, action) => {
        state.employees = [...action.payload];
      })
      .addCase(deleteRegisteredEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (employee: any) => employee.ID !== action.payload
        );
      });
  },
});

export const {} = employeeSlice.actions;
export const employeeSelector = (state: RootState) =>
  state.employeeReducer.employees;
export default employeeSlice.reducer;
