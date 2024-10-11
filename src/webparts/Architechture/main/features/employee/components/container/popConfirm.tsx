import * as React from "react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";

const confirm = async (onConfirmHandler: Function) => {
  const response = await onConfirmHandler();
  if (response !== undefined) {
    message.success("Deleted Successfully");
  }
};

const cancel: PopconfirmProps["onCancel"] = () => {};

interface IPopConfirm {
  title?: string;
  description?: string;
  onConfirm: Function;
}

const PopConfirm: React.FC<IPopConfirm> = ({
  title = "Are you sure you want to delete?",
  description = "Once you delete this can’t be recovered",
  onConfirm,
}) => (
  <Popconfirm
    title={title}
    description={description}
    onConfirm={() => confirm(onConfirm)}
    onCancel={cancel}
    okText="Yes"
    cancelText="No">
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default PopConfirm;
