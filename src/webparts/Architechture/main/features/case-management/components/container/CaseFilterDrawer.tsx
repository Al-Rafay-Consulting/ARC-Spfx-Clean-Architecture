import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import * as React from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

interface ICaseFilterDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterValues: object;
  setFilterValues: React.Dispatch<React.SetStateAction<object>>;
}

const CaseFilterDrawer: React.FC<ICaseFilterDrawerProps> = ({
  open,
  setOpen,
  filterValues,
  setFilterValues,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const discardHandler = () => {
    setFilterValues({});
    onClose();
  };

  const statusOptions = ["In Progress", "Closed", "Not Started", "Cancelled"];

  const onFinish = (values: any) => {
    setFilterValues(values);
    onClose();
  };
  return (
    <>
      <Drawer title="Filter" onClose={onClose} open={open}>
        <Form
          name="case_form"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ CurrentStatus: "In Progress", ...filterValues }}
        >
          <Form.Item name="CaseName" label="Case Name">
            <Input placeholder="Enter case name" />
          </Form.Item>

          <Form.Item name="CaseNumber" label="Case Number">
            <Input placeholder="Enter case number" />
          </Form.Item>

          <Form.Item name="PropertyLocation" label="Property Location">
            <Input placeholder="Enter property location" />
          </Form.Item>

          <Form.Item name="CaseType" label="Case Type">
            <Input placeholder="Enter case type" />
          </Form.Item>

          <Form.Item name="DateFiled" label="Date Filed">
            <RangePicker />
          </Form.Item>

          <Form.Item name="Court" label="Court">
            <Input placeholder="Enter court" />
          </Form.Item>

          <Form.Item name="CurrentStatus" label="Current Status">
            <Select>
              {statusOptions.map((status) => (
                <Option key={status} value={status}>
                  {status}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Apply
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={discardHandler}
              htmlType="button"
              type="danger"
            >
              {" "}
              Discard
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default CaseFilterDrawer;
