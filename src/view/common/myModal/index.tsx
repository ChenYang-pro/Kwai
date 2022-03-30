import { Modal } from 'antd';

/**
 * @param {isVisible: boolean} Modal是否显示
 * @param {footerBtn: object | null} Modal底部按钮是否显示
 * @param {Content: React.FC} Modal展示的内容
 * @param {mask: boolean} Modal是否展示遮罩
 * @param {maskClose: boolean} Modal点击遮罩关闭
 * @param {handleCancle: function} Modal点击右上角叉或取消的回调
 * @param {TitleContent: React.FC} Modal标题
 */
type ModalPropsType = {
  isVisible: boolean;
  footerBtn: object | null;
  BodyContent: React.FC;
  handleCancle: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  TitleContent: React.FC;
};

// 封装Antd - Modal
function MyModal(props: ModalPropsType) {
  const { TitleContent, isVisible, footerBtn, BodyContent, handleCancle } = props;
  return (
    <Modal
      title={<TitleContent />}
      visible={isVisible}
      footer={footerBtn}
      onCancel={handleCancle}
      style={{
        width: '100vw',
        maxWidth: '100vw',
        height: '65vh',
        margin: '0px',
        padding: '0px',
        position: 'relative',
        top: '50vh',
        bottom: '0',
        overflow: 'auto',
        borderRadius: '1rem'
      }}
      transitionName=""
      bodyStyle={{
        padding: '24px'
      }}>
      <BodyContent />
    </Modal>
  );
}

export default MyModal;
