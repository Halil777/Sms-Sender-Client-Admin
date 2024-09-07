import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  background: #0762c81a;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  svg {
    font-size: 20px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0e1217;
`;

export const CardCount = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #0e1217;
  margin-top: 8px;
`;
