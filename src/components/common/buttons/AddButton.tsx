import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  margin-top: 20px;
  gap: 10px;
  background-color: #64748b;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4b5563; /* Darker shade for hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 116, 139, 0.5);
  }
`;

interface AddButtonProps {
  onClick?: () => void; // Optional onClick handler
  children?: React.ReactNode;
}

const AddButton: FC<AddButtonProps> = ({ children }) => {
  return <StyledButton>{children || "Add"}</StyledButton>;
};

export default AddButton;
