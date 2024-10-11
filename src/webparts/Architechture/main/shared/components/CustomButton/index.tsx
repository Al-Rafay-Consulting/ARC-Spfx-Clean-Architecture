import * as React from "react";
import { Button } from "antd";
import "./CustomButton.css";
import { ButtonHTMLType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";

// Define the props interface
interface CustomButtonProps {
  icon?: React.ReactNode;
  btnName?: string;
  afterIcon?: React.ReactNode;
  onClickFunc?: ((arg?: string | {} | undefined) => any) | undefined;
  btnType?: ButtonHTMLType;
  outlineBtn?: boolean;
  size?: SizeType;
  loading?: boolean;
  buttonTip?: string;
  customStyle?: {};
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  btnName,
  afterIcon,
  btnType,
  outlineBtn = false,
  loading = false,
  onClickFunc,
  size,
  buttonTip,
  customStyle,
  disabled,
}) => {
  const onClickButton = () => {
    if (onClickFunc) {
      onClickFunc();
    }
  };
  return (
    <>
      <Button
        title={buttonTip}
        loading={loading}
        htmlType={btnType}
        className={outlineBtn ? "customBtnOutline" : "customBtn"}
        onClick={() => onClickButton()}
        size={size}
        style={{ ...customStyle }}
        disabled={disabled}>
        {icon}
        {btnName}
        {afterIcon}
      </Button>
    </>
  );
};

export default CustomButton;
