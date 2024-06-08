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
      <div className="flex justify-end w-full cursor-pointer px-6 py-3 z-50 ">
        <button type="button" className="w-4 cursor-pointer mr-5" onClick={onClose}>
          <Closeicon className="w-5 " />
        </button>
      </div>
      <div
        className=" z-50 px-6 pb-6 box-border overflow-y-auto "
        style={{
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
