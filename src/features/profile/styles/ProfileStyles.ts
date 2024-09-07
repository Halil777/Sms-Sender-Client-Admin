import { Input } from "antd";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const UserDetails = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #333;
  margin-bottom: 30px;
`;

export const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const AvatarContainer = styled.div`
  margin-right: 20px;
`;

export const UploadLabel = styled.label`
  z-index: 1;
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 12px 24px;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
    transition: transform 0.45s ease-in-out;
  }

  &:hover::after {
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }

  &:hover {
    background-color: #594bb0;
  }

  &:active {
    background-color: #4b4094;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6c5dd3;
    box-shadow: 0 0 0 3px rgba(108, 93, 211, 0.2);
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6c5dd3;
    box-shadow: 0 0 0 3px rgba(108, 93, 211, 0.2);
  }
`;

export const HorizontalLine = styled.hr`
  margin: 30px 0;
  border: 0;
  border-top: 1px solid #eaeaea;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const SaveButton = styled.button`
  z-index: 1;
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 12px 24px;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
    transition: transform 0.45s ease-in-out;
  }

  &:hover::after {
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }

  &:hover {
    background-color: #594bb0;
  }

  &:active {
    background-color: #4b4094;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #6c5dd3;
  background-color: #fff;
  border: 1px solid #6c5dd3;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;
