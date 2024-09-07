import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import CreateButton from "../../../components/common/buttons/CreateButton";

const GroupHeader: FC = () => {
  return (
    <>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search group..." />}
        rightContent={<CreateButton>Create group</CreateButton>}
      />
    </>
  );
};

export default GroupHeader;
