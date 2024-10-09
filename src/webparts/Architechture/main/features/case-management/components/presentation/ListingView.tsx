import type { TableProps } from "antd";
import { Avatar, Table, UploadFile } from "antd";
import * as dayjs from "dayjs";
import { GoDotFill } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import * as React from "react";
import BasePnpService from "../../../../shared/services/basePnp.service";

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

const columns: TableProps<DataType>["columns"] = [
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

const EmployeeView: React.FC = () => {
  const [cases, setCases] = React.useState([]);
  const pnpService = BasePnpService.getPersistentInstance();

  React.useEffect(() => {
    (async () => {
      const response: any = await pnpService.getAll("Cases", ["*"]);
      console.log(response);
      if (response) {
        setCases(response?.data);
      }
    })();
  }, []);

  return <Table<DataType> columns={columns} dataSource={cases ? cases : []} />;
};

export default EmployeeView;
