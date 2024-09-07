import { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

// Styled container for the search input
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededed; /* Border color */
  border-radius: 8px; /* Radius */
  background-color: #ffffff; /* Background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  width: 385px; /* Default width */
  height: 47px; /* Height */
  transition: width 0.3s ease; /* Smooth width transition */
`;

// Styled input for the search
const SearchInput = styled.input<{ isFocused: boolean }>`
  border: 1px solid #ffffff; /* Border color */
  outline: none;
  flex-grow: 1;
  padding: 0 10px;
  font-size: 16px;
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s ease; /* Smooth width transition */
  width: ${(props) =>
    props.isFocused ? "445px" : "385px"}; /* Adjust width on focus */
`;

// Styled icon container
const SearchIconContainer = styled.div`
  width: 14.75px; /* Icon width */
  height: 14.75px; /* Icon height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px; /* Space between icon and input */
  color: #64748b; /* Icon color */
  margin-left: 10px;
`;

// Props interface for the UniversalSearch component
interface UniversalSearchProps {
  placeholder?: string; // Placeholder text for the search input
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Handler for input change
  value?: string; // Controlled input value
}

// UniversalSearch Component
const UniversalSearch: FC<UniversalSearchProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchOutlined style={{ fontSize: "16.75px", color: "#64748b" }} />
      </SearchIconContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SearchContainer>
  );
};

export default UniversalSearch;
