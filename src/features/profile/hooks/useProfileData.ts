import { useState } from "react";

const useProfileData = () => {
  const [profileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
  });

  return profileData;
};

export default useProfileData;
