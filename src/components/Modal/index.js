import ReactModal from "react-modal";
import { ReactComponent as Closeicon } from "assets/icons/close.svg";
import "./modal.css";

const Modal = ({ open, onClose, customClass, width, children }) => {
  const modalCustomStyles = {};
  if (width) {
    modalCustomStyles.width = `${width}px`;
  }

  return (
    <ReactModal
      isOpen={!!open}
      onClose={onClose}
      onRequestClose={onClose}
      className={`modal ${customClass}`}
      overlayClassName={"overlay"}
      style={{
        content: modalCustomStyles,
      }}
    >
      <div className="header" onClick={onClose} style={{ cursor: "pointer" }}>
        <Closeicon className="w-4"/>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          overflowY: "auto",
          padding: "24px",
          fontFamily: "Nunito Sans",
        }}
      >
        {children}
      </div>
    </ReactModal>
  );
};

ReactModal.setAppElement("body");
export default Modal;
