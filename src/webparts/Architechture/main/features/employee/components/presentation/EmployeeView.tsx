import type { TableProps } from "antd";
import { Space, UploadFile } from "antd";
import * as dayjs from "dayjs";
import * as React from "react";
import { imageURL } from "../../../../config/constants/constants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../config/hooks/reduxHook";
import TableStructure from "../../../../shared/components/TableStructure";
import { deleteRegisteredEmployee, getRegisteredEmployees } from "../../store";
import PopConfirm from "../../../../shared/components/PopConfirm";

interface DataType {
  ID: string;
  Name?: string;
  Email?: string;
  DOB?: string;
  Description?: string;
  Image?: UploadFile;
}

const EmployeeView: React.FC = () => {
  const dispatch = useAppDispatch();
  const deleteHandler = (id: number) => {
    dispatch(deleteRegisteredEmployee(id));
  };
  const { employees } = useAppSelector((state) => state.employeeReducer);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Date Of Birth",
      dataIndex: "DOB",
      key: "DOB",
      render: (text) => <p>{dayjs(text).format("DD/MM/YYYY")}</p>,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Image",
      key: "Image",
      dataIndex: "Image",
      render: (srcValue) => (
        <img
          src={imageURL(srcValue)}
          className={"img-fluid"}
          style={{ width: "50px" }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "ID",
      render: (id) => (
        <Space size="middle">
          <PopConfirm onConfirm={() => deleteHandler(id)} />
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    dispatch(getRegisteredEmployees());
  }, []);

  return <TableStructure columns={columns} dataSource={employees} />;
};

export default EmployeeView;
