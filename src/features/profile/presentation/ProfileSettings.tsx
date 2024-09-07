import React, { useState } from "react";
import { Tabs } from "antd";
import Profile from "../components/Profile";
import Notifications from "../components/Notifications";
import { useTranslation } from "react-i18next";

const ProfileSettings: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    console.log(activeTab);
  };

  return (
    <Tabs defaultActiveKey="profile" onChange={handleTabChange}>
      <Tabs.TabPane tab={t("tabs.profile")} key="profile">
        <Profile />
      </Tabs.TabPane>
      <Tabs.TabPane tab={t("tabs.notifications")} key="notifications">
        <Notifications />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ProfileSettings;
