// src/components/Profile.tsx

import React from "react";
import { Avatar, Row, Col } from "antd";
import { useProfileLogic } from "../logic/useProfileLogic";
import {
  ActionButtonsContainer,
  AvatarContainer,
  AvatarSection,
  CancelButton,
  HiddenInput,
  HorizontalLine,
  ProfileContainer,
  SaveButton,
  StyledInput,
  StyledTextArea,
  UploadLabel,
  UserDetails,
} from "../styles/ProfileStyles";
import { useTranslation } from "react-i18next";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const {
    avatar,
    firstName,
    surname,
    handleAvatarChange,
    handleFirstNameChange,
    handleSurnameChange,
    handleSave,
    handleCancel,
  } = useProfileLogic();

  return (
    <ProfileContainer>
      <UserDetails>{t("profile.userDetails")}</UserDetails>
      <AvatarSection>
        <AvatarContainer>
          <Avatar size={100} src={avatar} />
        </AvatarContainer>
        <div>
          <UploadLabel htmlFor="avatar-upload">
            {t("profile.changePicture")}
          </UploadLabel>
          <HiddenInput
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
      </AvatarSection>
      <HorizontalLine />
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <StyledInput
            placeholder={t("profile.firstName")}
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Col>
        <Col xs={24} sm={12}>
          <StyledInput
            placeholder={t("profile.surname")}
            value={surname}
            onChange={handleSurnameChange}
          />
        </Col>
      </Row>
      <StyledInput placeholder={t("profile.email")} />
      <StyledTextArea placeholder={t("profile.about")} rows={4} />
      <HorizontalLine />
      <ActionButtonsContainer>
        <CancelButton onClick={handleCancel}>
          {t("profile.cancel")}
        </CancelButton>
        <SaveButton onClick={handleSave}>{t("profile.save")}</SaveButton>
      </ActionButtonsContainer>
    </ProfileContainer>
  );
};

export default Profile;
