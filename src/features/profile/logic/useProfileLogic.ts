import { notification } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProfileLogic = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>(
    localStorage.getItem("profileAvatar") || "https://via.placeholder.com/100"
  );
  const [firstName, setFirstName] = useState<string>(
    localStorage.getItem("firstName") || ""
  );
  const [surname, setSurname] = useState<string>(
    localStorage.getItem("surname") || ""
  );

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedSurname = localStorage.getItem("surname");
    const storedAvatar = localStorage.getItem("profileAvatar");

    if (storedFirstName) setFirstName(storedFirstName);
    if (storedSurname) setSurname(storedSurname);
    if (storedAvatar) setAvatar(storedAvatar);
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const newAvatar = event.target.result as string;
          setAvatar(newAvatar);
          localStorage.setItem("profileAvatar", newAvatar);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("surname", surname);

    notification.success({
      message: "Profile Updated",
      description:
        "Your profile information has been saved. The page will reload automatically to reflect these changes.",
      duration: 5,
      onClose: () => {
        setTimeout(() => {
          window.location.reload();
        }, 10);
      },
    });
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return {
    avatar,
    firstName,
    surname,
    handleAvatarChange,
    handleFirstNameChange,
    handleSurnameChange,
    handleSave,
    handleCancel,
  };
};
