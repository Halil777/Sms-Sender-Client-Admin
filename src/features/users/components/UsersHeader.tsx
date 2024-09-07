import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import RightContent from "./RightContent";

const UsersHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search here users..." />}
        rightContent={<RightContent />}
      />
    </div>
  );
};

export default UsersHeader;
