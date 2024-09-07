import React from "react";
import { Row, Col } from "antd";
import {
  FaPaperPlane,
  FaUserAlt,
  FaEnvelopeOpenText,
  FaUsers,
} from "react-icons/fa"; // Import react-icons
import useDashboardData from "../hooks/useDashboardData";
import { formatNumber } from "../logic/DashboardLogic";
import { DashboardCardProps } from "../interface/DashboardInterfaces";
import {
  CardCount,
  CardText,
  IconWrapper,
  StyledCard,
  TextWrapper,
  CardHeader,
} from "../style/DashboardStyle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Dashboard: React.FC = () => {
  const { t } = useTranslation(); // Get translation function
  const data = useDashboardData();

  return (
    <Row gutter={[16, 16]}>
      {data && (
        <>
          {/* Send SMS Card */}
          <DashboardCard
            icon={<FaPaperPlane style={{ color: "#1A54EB" }} />} // Appropriate icon for Send SMS
            text={t("dashboard.send_sms")} // Use translation
            count={data.send_sms}
            delay={0}
          />

          {/* Clients Card */}
          <DashboardCard
            icon={<FaUserAlt style={{ color: "#1A54EB" }} />} // Appropriate icon for Clients
            text={t("dashboard.clients")} // Use translation
            count={data.clients}
            delay={0.3}
          />

          {/* Delivered SMS Card */}
          <DashboardCard
            icon={<FaEnvelopeOpenText style={{ color: "#1A54EB" }} />} // Appropriate icon for Delivered SMS
            text={t("dashboard.delivered_sms")} // Use translation
            count={data.delivered_sms}
            delay={0.5}
          />

          {/* Groups Card */}
          <DashboardCard
            icon={<FaUsers style={{ color: "#1A54EB" }} />} // Appropriate icon for Groups
            text={t("dashboard.groups")} // Use translation
            count={data.groups}
            delay={0.7}
          />
        </>
      )}
    </Row>
  );
};

const DashboardCard: React.FC<DashboardCardProps & { delay: number }> = ({
  icon,
  text,
  count,
  delay,
}) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay }}
      >
        <StyledCard>
          <CardHeader>
            <IconWrapper>{icon}</IconWrapper>
            <CardText>{text}</CardText>
          </CardHeader>
          <TextWrapper>
            <CardCount>{formatNumber(count)}</CardCount>
          </TextWrapper>
        </StyledCard>
      </motion.div>
    </Col>
  );
};

export default Dashboard;
