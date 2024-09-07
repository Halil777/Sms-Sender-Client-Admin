import { FC } from "react";
import styled from "styled-components";

// Styled container for the PageHeader
const HeaderContainer = styled.div`
  height: 87px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
`;

interface PageHeaderProps {
  leftContent?: React.ReactNode; // Content for the left side
  rightContent?: React.ReactNode; // Content for the right side
}

// Universal PageHeader Component
const PageHeader: FC<PageHeaderProps> = ({ leftContent, rightContent }) => {
  return (
    <HeaderContainer>
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </HeaderContainer>
  );
};

export default PageHeader;
