import React, { useState } from "react";
import { Menu, Button, Dropdown } from "antd";
import { FaFilter } from "react-icons/fa";
import type { MenuProps } from "antd";
import styled from "styled-components";

// Styled component for the Filter button
const FilterButton = styled(Button)`
  width: 103px;
  height: 47px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background-color: #ffffff;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Styled component for the Filter icon
const StyledFaFilter = styled(FaFilter)`
  width: 15.58px;
  height: 14.17px;
  color: #64748b;
  margin-right: 8px; /* Adjust this margin to space the icon from the text */
`;

const items: MenuProps["items"] = [
  {
    label: "All SMS",
    key: "all",
  },
  {
    label: "Success",
    key: "success",
  },
  {
    label: "Error",
    key: "error",
  },
];

const UserFilter: React.FC = () => {
  const [current, setCurrent] = useState("all");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const menu = (
    <Menu onClick={onClick} selectedKeys={[current]} items={items} />
  );

  return (
    <Dropdown overlay={menu} trigger={["hover"]}>
      <FilterButton icon={<StyledFaFilter />}>Filter</FilterButton>
    </Dropdown>
  );
};

export default UserFilter;
