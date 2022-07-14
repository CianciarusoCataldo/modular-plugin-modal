/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) reducer file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineEffects } from "modular-engine-types";

import { ModalPluginState } from "./types";

import {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "./actions";

/**
 * Internal [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) reducer
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 *  @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
const modalReducer: ModularEngineEffects<ModalPluginState> = {
  [openModal.type]: (state, action) => ({
    ...state,
    isVisible: action.payload.type !== null,
    type: action.payload.type,
    context: action.payload.context || state.context,
  }),
  [closeModal.type]: (state) => ({
    ...state,
    isVisible: false,
    type: null,
    context: {},
  }),
  [setModalContext.type]: (state, action) => ({
    ...state,
    context: action.payload.context || state.context,
  }),
  [setModalVisiblity.type]: (state, action) => ({
    ...state,
    isVisible: action.payload.visibility,
  }),
  [setModalForm.type]: (state, action) => ({
    ...state,
    type: action.payload.type || state.type,
  }),
};

export default modalReducer;
