import { FC, useRef } from "react";
import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  width: 181px; /* Fixed width */
  height: 47px; /* Fixed height */
  border-radius: 6px; /* Border radius */
  background-color: #0762c8; /* Background color */
  color: #ffffff; /* Text color */
  border: none; /* Remove default border */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Font weight */
  transition: background-color 0.3s; /* Smooth background color transition */

  &:hover {
    background-color: #064b8b; /* Darker background on hover */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
  }
`;

// Props interface for the CreateButton component
interface CreateButtonProps {
  onClick?: () => void; // Optional onClick handler
  children?: React.ReactNode; // Button content
  isUploadButton?: boolean; // Specific prop to identify upload button
}

// CreateButton Component
const CreateButton: FC<CreateButtonProps> = ({
  onClick,
  children,
  isUploadButton,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (isUploadButton && fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      onClick?.();
    }
  };

  return (
    <>
      <StyledButton onClick={handleClick}>{children}</StyledButton>
      {isUploadButton && (
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".vcf"
        />
      )}
    </>
  );
};

export default CreateButton;
