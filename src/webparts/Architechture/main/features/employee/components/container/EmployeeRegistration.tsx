import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, FormProps, Input, Upload } from "antd";
import * as React from "react";
import { IEmployeeProps } from "../../interfaces/IEmployeeProps";
import { useAppDispatch } from "../../../../config/hooks/reduxHook";
import { registerEmployee } from "../../store";
import * as dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EmployeeRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submitHandler: FormProps<IEmployeeProps>["onFinish"] = async (
    values
  ) => {
    values.DOB = dayjs(values.DOB).toISOString();
    const response = await dispatch(registerEmployee(values));
    if (response !== undefined) {
      navigate("/employee/list");
    }
  };

  return (
    <>
      <h1>Employee Registration</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
        onFinish={submitHandler}
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date Of Birth"
          name="DOB"
          rules={[
            { required: true, message: "Please input your date of birth!" },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Profile Picture"
          valuePropName="fileList"
          name="Image"
          getValueFromEvent={normFile}
          rules={[
            { required: true, message: "Please input your profile picture!" },
          ]}
        >
          <Upload listType="picture-card" maxCount={1}>
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <EmployeeRegistration />;
