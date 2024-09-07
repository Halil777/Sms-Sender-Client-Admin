import React, { FC } from "react";
import { AutoComplete, Input } from "antd";
import styled from "styled-components";

interface CustomAutocompleteProps {
  options: string[]; // List of options to display
  onSelect: (value: string) => void; // Callback for when an option is selected
  placeholder?: string; // Optional placeholder text
  style?: React.CSSProperties; // Optional style prop to customize the component's container
}

const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
  .ant-select-selector {
    border-radius: 8px;
    border-color: #d9d9d9;
    &:hover {
      border-color: #40a9ff;
    }
  }
`;

const CustomAutocomplete: FC<CustomAutocompleteProps> = ({
  options,
  onSelect,
  placeholder = "Search...",
  style,
}) => {
  return (
    <StyledAutoComplete
      options={options.map((option) => ({ value: option }))}
      onSelect={(value) => onSelect(value as string)} // Ensure type casting
      placeholder={placeholder}
      style={style}
    >
      <Input />
    </StyledAutoComplete>
  );
};

export default CustomAutocomplete;
