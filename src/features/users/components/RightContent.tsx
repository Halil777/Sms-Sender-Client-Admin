import { FC } from "react";
import { ContainerRightContent } from "../styles/rightContent";
import UserFilter from "./UserFilter";
import CreateButton from "../../../components/common/buttons/CreateButton";

const RightContent: FC = () => {
  return (
    <div>
      <ContainerRightContent>
        <UserFilter />
        <CreateButton isUploadButton>Import vcf</CreateButton>
        <CreateButton>Create new user</CreateButton>
      </ContainerRightContent>
    </div>
  );
};

export default RightContent;
