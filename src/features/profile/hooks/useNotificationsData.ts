import { useState } from "react";

const useNotificationsData = () => {
  const [notifications] = useState([
    { id: 1, message: "Your profile has been updated." },
    { id: 2, message: "You have a new friend request." },
    { id: 3, message: "Password changed successfully." },
  ]);

  return notifications;
};

export default useNotificationsData;
