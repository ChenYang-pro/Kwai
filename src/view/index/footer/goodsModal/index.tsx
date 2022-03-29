import { Modal } from 'antd';

type ModalPropsType = {
  isModalVisible: boolean | undefined;
  handleOk?: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  handleCancel?: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
};

function GoodsModal(props: ModalPropsType) {
  const { isModalVisible, handleOk, handleCancel } = props;


  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default GoodsModal;
