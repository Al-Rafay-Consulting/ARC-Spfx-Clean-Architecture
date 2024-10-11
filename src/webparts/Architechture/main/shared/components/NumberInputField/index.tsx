import { Form, InputNumber } from "antd";
import { Rule } from "antd/es/form";
import * as React from "react";

interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: Rule[];
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
}

const NumberInputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  validationRules,
  prefix,
  suffix,
}) => {
  return (
    <Form.Item
      name={name}
      label={<div style={{ fontWeight: "600" }}>{label}</div>}
      rules={validationRules}>
      <InputNumber
        style={{ width: "100%" }}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
    </Form.Item>
  );
};

export default NumberInputField;
