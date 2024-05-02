/* eslint-disable jsx-a11y/control-has-associated-label */
import ReactModal from "react-modal";
import { ReactComponent as Closeicon } from "assets/icons/close.svg";
import "./modal.css";

const Modal = ({ open, onClose, customClass, width, children, isWishList, ...props }) => {
  const modalCustomStyles = {};
  if (width) {
    modalCustomStyles.width = `${width}px`;
  }

  return (
    <ReactModal
      isOpen={!!open}
      onClose={onClose}
      onRequestClose={onClose}
      className={`modal !z-50 ${customClass}`}
      overlayClassName={"overlay"}
      style={{
        content: modalCustomStyles,
      }}
      {...props}
    >
      <div className="header z-50 ">
        <button type="button" className="w-4 cursor-pointer mr-2" onClick={onClose}>
          <Closeicon className="w-5 mt-2" />
        </button>
      </div>
      <div
        className=" z-50 "
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
