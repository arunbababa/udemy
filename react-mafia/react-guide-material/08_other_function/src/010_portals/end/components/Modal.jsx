import "./Modal.css";

const Modal = ({ handleCloseClick }) => {

  console.log("これがhandleckickプロップスの中身や！",{handleCloseClick})

  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        <button type="button" onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
