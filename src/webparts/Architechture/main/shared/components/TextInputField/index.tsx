import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/es/form";
import * as  React from "react";
interface OnChangeHandler {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}
interface InputFieldProps {
  name?: string | string[];
  label?: string;
  placeholder?: string;
  validationRules?: Rule[] | undefined;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  size?: SizeType;
  customStyle?: {};
  border?: boolean;
  maxLength?: number;
  disabled?: boolean;
  onChange?: OnChangeHandler;
}

const TextInputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  validationRules,
  prefix,
  suffix,
  size,
  customStyle,
  border = true,
  maxLength,
  disabled,
  onChange }) => {
  return (
    <Form.Item
      name={name}
      label={label && <div style={{ fontWeight: "600" }}>{label}</div>}
      rules={validationRules}
    >
      {<Input
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        size={size}
        style={customStyle}
        bordered={border} />
      }
    </Form.Item>
  );
};

export default TextInputField;
