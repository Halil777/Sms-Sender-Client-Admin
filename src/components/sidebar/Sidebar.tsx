import { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

// Container for the sidebar with added box-shadow
const SidebarContainer = styled.div`
  width: 230px;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 20px;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  z-index: 100; /* Ensure it's above other elements if needed */
  position: relative; /* Ensure it's positioned relative to its container */

  @media (max-width: 768px) {
    width: 80px; /* Reduce width on small screens */
  }
`;

// Title at the top of the sidebar
const SidebarTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #0e1217;
  padding: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide title on small screens */
  }
`;

// Menu items styling
const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: #64748b; // Default color

  &.active {
    color: #1a54eb;
    background-color: #f4f7ff;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  .anticon {
    font-size: 18px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px; /* Adjust padding */
    .anticon {
      margin-right: 0; /* Remove margin from icon */
    }
  }
`;

// Hide text for small screens
const MenuItemText = styled.span`
  @media (max-width: 768px) {
    display: none; /* Hide text for sm and xs sizes */
  }
`;

// Icon with conditional styling
const IconWrapper = styled.span<{ isActive: boolean }>`
  .anticon {
    color: ${(props) =>
      props.isActive
        ? "#1a54eb"
        : "#64748b"}; // Icon color based on active state
  }
`;

const Sidebar: FC = () => {
  const { t } = useTranslation();

  return (
    <SidebarContainer>
      <SidebarTitle>Sms Sender</SidebarTitle>
      <MenuItem
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <HomeOutlined />
        </IconWrapper>
        <MenuItemText>{t("sidebar.dashboard")}</MenuItemText>
      </MenuItem>
      <MenuItem
        to="/users"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <UsergroupAddOutlined />
        </IconWrapper>
        <MenuItemText>{t("sidebar.users")}</MenuItemText>
      </MenuItem>
      <MenuItem
        to="/groups"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <UsergroupAddOutlined />
        </IconWrapper>
        <MenuItemText>{t("sidebar.groups")}</MenuItemText>
      </MenuItem>
      <MenuItem
        to="/phones"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <PhoneOutlined />
        </IconWrapper>
        <MenuItemText>{t("sidebar.phones")}</MenuItemText>
      </MenuItem>
      {/* Add more menu items as needed */}
    </SidebarContainer>
  );
};

export default Sidebar;
