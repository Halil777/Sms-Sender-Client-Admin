import { Table, TableProps } from "antd";
import styled from "styled-components";

export const StyledTable = styled(Table)<TableProps<any>>`
  .ant-table-thead > tr > th {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    background-color: transparent;
  }

  .ant-table-tbody > tr > td {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
`;
