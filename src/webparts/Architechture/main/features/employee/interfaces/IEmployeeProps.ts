import { UploadFile } from "antd";

export interface IEmployeeProps {
  Name?: string;
  Email?: string;
  DOB?: string;
  Description?: string;
  Image?: UploadFile;
}
