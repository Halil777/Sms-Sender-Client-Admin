import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  AdminText,
  HeaderContainer,
  LeftContainer,
  RightContainer,
  UserIconContainer,
  WelcomeText,
} from "./headerStyle";
import Language from "../../utils/language/Language";

const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const surname = localStorage.getItem("surname");
    const storedAvatar = localStorage.getItem("profileAvatar");

    if (firstName && surname) {
      setFullName(`${firstName} ${surname}`);
    }

    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);

  const getPageName = () => {
    const path = location.pathname.split("/")[1];
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        {fullName ? (
          <AdminText>Hello {fullName}!</AdminText>
        ) : (
          <AdminText>Hello Admin!</AdminText>
        )}
        <WelcomeText>Welcome back to {getPageName()}.</WelcomeText>
      </LeftContainer>
      <RightContainer>
        <Language />
        <UserIconContainer>
          {avatar ? (
            <Avatar
              size={40}
              src={avatar}
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <UserOutlined
              style={{ fontSize: "24px", color: "#64748b" }}
              onClick={() => navigate("/profile")}
            />
          )}
        </UserIconContainer>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
