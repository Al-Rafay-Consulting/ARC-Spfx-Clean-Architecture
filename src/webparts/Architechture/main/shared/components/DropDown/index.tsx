import * as React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

interface iDropDownProps {
  title: string;
  className?: string;
  items?: MenuProps["items"];
}

// Default dropdown items
const defaultItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.example.com"
      >
        Default menu item 1
      </a>
    ),
  },
  {
    key: "2",
    label: "Default menu item 2",
    icon: <SmileOutlined />,
  },
  {
    key: "3",
    danger: true,
    label: "Danger item",
  },
];

const DropDown: React.FC<iDropDownProps> = ({
  title,
  className,
  items = defaultItems,
}) => (
  <Dropdown menu={{ items }} className={className}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {title}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;
