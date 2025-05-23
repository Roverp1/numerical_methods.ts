import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

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

  return (
    <>
      <button className="button-description" onClick={toggleModal}>
        button
      </button>
    </>
  );
};

export default ButtonDescription;
