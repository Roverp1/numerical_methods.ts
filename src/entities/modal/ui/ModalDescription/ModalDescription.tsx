import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen, selectModalContent } from "../../model/selectors";
import { closeModal } from "../../model/slice";

import "./ModalDescription.scss";

const ModalDescription = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const content = useSelector(selectModalContent);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [dispatch]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        top: "10vh",
        // background: "rgba(0, 0, 0, 0.4)",
        // backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={() => dispatch(closeModal())}>
      <div className="modal-description" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
};

export default ModalDescription;
