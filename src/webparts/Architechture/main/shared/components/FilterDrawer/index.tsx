import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import * as React from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

export interface IFormField {
  name: string;
  label: string;
  type: "input" | "select" | "rangePicker" | "datePicker";
  options?: string[]; // Only for Select fields
}

interface IFilterDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterValues: object;
  setFilterValues: React.Dispatch<React.SetStateAction<object>>;
  formFields: IFormField[]; // Array of form fields
}

const FilterDrawer: React.FC<IFilterDrawerProps> = ({
  open,
  setOpen,
  filterValues,
  setFilterValues,
  formFields,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const discardHandler = () => {
    setFilterValues({});
    onClose();
  };

  const onFinish = (values: any) => {
    setFilterValues(values);
    onClose();
  };

  const renderFormField = (field: IFormField) => {
    switch (field.type) {
      case "input":
        return <Input placeholder={`Enter ${field.label.toLowerCase()}`} />;
      case "select":
        return (
          <Select>
            {field.options?.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        );
      case "rangePicker":
        return <RangePicker />;
      case "datePicker":
        return <DatePicker />;
      default:
        return null;
    }
  };

  return (
    <Drawer title="Filter" onClose={onClose} open={open}>
      <Form
        name="case_form"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ ...filterValues }}
      >
        {formFields.map((field) => (
          <Form.Item key={field.name} name={field.name} label={field.label}>
            {renderFormField(field)}
          </Form.Item>
        ))}

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
            Discard
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default FilterDrawer;
