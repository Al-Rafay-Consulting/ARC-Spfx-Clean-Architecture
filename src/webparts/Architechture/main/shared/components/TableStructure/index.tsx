import type { TableProps } from "antd";
import { Avatar, Table, UploadFile } from "antd";
import * as dayjs from "dayjs";
import * as React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

interface DataType {
  ID: string;
  Name?: string;
  Email?: string;
  DOB?: string;
  Description?: string;
  Image?: UploadFile;
}

const getInitials = (name: string) => {
  const words = name.split(" ");
  return words.map((word) => word.charAt(0)).join("");
};

const existingColumns: TableProps<DataType>["columns"] = [
  {
    title: "",
    dataIndex: "CaseName",
    key: "CaseName",
    render: (text) => (
      <Avatar style={{ backgroundColor: "#00549F", marginRight: "8px" }}>
        {getInitials(text)}
      </Avatar>
    ),
  },
  {
    title: "Case Name",
    dataIndex: "CaseName",
    key: "CaseName",
  },
  {
    title: "Case Number",
    dataIndex: "CaseNumber",
    key: "CaseNumber",
  },
  {
    title: "Property Location",
    dataIndex: "PropertyLocation",
    key: "PropertyLocation",
  },
  {
    title: "Case Type",
    dataIndex: "CaseType",
    key: "CaseType",
  },
  {
    title: "Date Filed",
    dataIndex: "DateFiled",
    key: "DateFiled",
    render: (text) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <CiCalendar />
        <p>{dayjs(text).format("DD/MM/YYYY")}</p>
      </div>
    ),
  },
  {
    title: "Court",
    dataIndex: "Court",
    key: "Court",
  },
  {
    title: "Current Status",
    dataIndex: "CurrentStatus",
    key: "CurrentStatus",
    render: (status) => {
      let color;
      let iconColor;
      switch (status) {
        case "In Progress":
          color = "#2BA3E7";
          iconColor = "#92D8FF";
          break;
        case "Closed":
          color = "#3FC1A7";
          iconColor = "#9FE8D9";
          break;
        case "Not Started":
          color = "#7C6EF7";
          iconColor = "#C3BCFF";
          break;
        case "Cancelled":
          color = "#DB394C";
          iconColor = "#FFADB7";
          break;
      }
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            gap: "5px",
            backgroundColor: color,
            padding: "5px 10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <GoDotFill color={iconColor} />
          <span>{status}</span>
        </div>
      );
    },
  },
];

const TableStructure: React.FC<any> = ({
  columns = existingColumns,
  dataSource = [],
}) => {
  return <Table<DataType> columns={columns} dataSource={dataSource} />;
};

export default TableStructure;
