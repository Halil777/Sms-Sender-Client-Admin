import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import CreateButton from "../../../components/common/buttons/CreateButton";

const PhoneHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search phone..." />}
        rightContent={<CreateButton>Create new phone</CreateButton>}
      />
    </div>
  );
};

export default PhoneHeader;
