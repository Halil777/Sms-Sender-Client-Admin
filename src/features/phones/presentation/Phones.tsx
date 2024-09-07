import { FC } from "react";
import { Container } from "../../../styles/container";
import PhoneHeader from "../components/PhoneHeader";
import PhoneTable from "../components/PhoneTable";

const Phones: FC = () => {
  return (
    <div>
      <Container>
        <PhoneHeader />
        <PhoneTable />
      </Container>
    </div>
  );
};

export default Phones;
