export { default as modalPlugin } from "./plugin";
export {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "./plugin/actions";
export {
  getModalContext,
  getModalType,
  getModalView,
  isModalVisible,
} from "./plugin/selectors";
export { ModalPluginState } from "./plugin/types";
