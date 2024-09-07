import { FC } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "../header/Header";

// Layout Container to manage the overall layout
const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

// Content area to include Header and main content
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f4f7ff;
`;

// Header container
const HeaderContainer = styled.div`
  height: 80px; // Header height
  background-color: white;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1); // Box shadow for the header
  position: sticky;
  top: 0;
  z-index: 1000; // Ensure header is above content
  width: 100%; // Ensure header spans full width
`;

// Main content container
const MainContent = styled.div`
  padding: 20px;
  flex-grow: 1; // Ensure content area grows to fill remaining space
  width: 100%; // Ensure it spans full width
`;

// Define the Layout component with children prop
const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentArea>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContent>{children}</MainContent>
      </ContentArea>
    </LayoutContainer>
  );
};

export default Layout;
