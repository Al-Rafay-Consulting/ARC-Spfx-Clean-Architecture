import { Form, Select } from "antd";
import { Rule } from "antd/es/form";
import * as  React from "react";

interface IDataItem {
  key: string;
  title: string;
}
interface ISelectFieldProps {
  label: string;
  validationRules?: Rule[];
  name: string;
  dataList: IDataItem[];
  placeholder: string;
}
const SelectField: React.FC<ISelectFieldProps> = ({
  label,
  validationRules,
  name,
  dataList,
  placeholder,
}) => {
  const { Option } = Select;
  return (
    <div>
      <Form.Item
        label={<div style={{ fontWeight: "600" }}>{label}</div>}
        name={name}
        rules={validationRules}
      >
        <Select
          placeholder={placeholder}
          showSearch
          optionFilterProp="children"
          style={{ width: "100%" }}
        >
          {dataList &&
            dataList.map((item: IDataItem) => (
              <Option value={item.key} key={item.key}>
                {item.title}
              </Option>
            ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectField;
