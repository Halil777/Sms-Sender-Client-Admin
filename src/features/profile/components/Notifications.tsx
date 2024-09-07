import React from "react";
import useNotificationsData from "../hooks/useNotificationsData";
import { Notification } from "../interface/ProfileInterfaces";
import { List, Card } from "antd";

const Notifications: React.FC = () => {
  const notifications: Notification[] = useNotificationsData();

  return (
    <Card title="Notifications">
      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item key={item.id}>{item.message}</List.Item>
        )}
      />
    </Card>
  );
};

export default Notifications;
