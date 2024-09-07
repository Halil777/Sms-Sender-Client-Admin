import { FC, ReactNode } from "react";
import { Modal } from "antd";
import styled from "styled-components";

// Styled container for the modal
const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
  }
  .ant-modal-header {
    background-color: #f0f2f5;
    border-bottom: 1px solid #e8e8e8;
  }
  .ant-modal-title {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: #0e1217;
  }
  .ant-modal-body {
    padding: 20px;
  }
  .ant-modal-footer {
    border-top: 1px solid #e8e8e8;
    text-align: right;
  }
`;

interface UniversalModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  footer?: ReactNode;
  children: ReactNode;
}

const UniversalModal: FC<UniversalModalProps> = ({
  title,
  visible,
  onCancel,
  onOk,
  footer,
  children,
}) => {
  return (
    <StyledModal
      title={title}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      footer={footer}
    >
      {children}
    </StyledModal>
  );
};

export default UniversalModal;
