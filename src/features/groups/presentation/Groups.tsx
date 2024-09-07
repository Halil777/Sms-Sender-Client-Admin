import { FC } from "react";
import { Container } from "../../../styles/container";
import GroupHeader from "../components/GroupHeader";
import GroupTable from "../components/GroupTable";

const Groups: FC = () => {
  return (
    <>
      <Container>
        <GroupHeader />
        <GroupTable />
      </Container>
    </>
  );
};

export default Groups;
