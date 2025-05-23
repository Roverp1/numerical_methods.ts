import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import { closeModal, openModal } from "../../model/slice";
import { selectIsModalOpen } from "../../model/selectors";

import ContentModalDescription from "../ContentModalDescription/ContentModalDescription";

import "./ButtonDescription.scss";

const ButtonDescription = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.pathname);

  const isModalOpen = useSelector(selectIsModalOpen);

  const toggleModal = () => {
    if (isModalOpen) {
      dispatch(closeModal());
    } else {
      // TODO: Convert to modalType instead of JSX in Redux (unserialised value)
      dispatch(openModal(<ContentModalDescription />));
    }
  };

  const buttonClassName = classNames("button-description", isModalOpen ? "active" : "");

  return (
    <>
      <button className={buttonClassName} onClick={toggleModal}>
        Jak to działa?
      </button>
    </>
  );
};

export default ButtonDescription;
