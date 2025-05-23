import type { RootState } from "../../../app/store/store";

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectModalContent = (state: RootState) => state.modal.content;
