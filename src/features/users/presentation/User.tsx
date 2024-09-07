import { FC } from "react";
import UsersHeader from "../components/UsersHeader";
import UsersTable from "../components/UsersTable";
import { Container } from "../../../styles/container";

const User: FC = () => {
  return (
    <div>
      <Container>
        <UsersHeader />
        <UsersTable />
      </Container>
    </div>
  );
};

export default User;
