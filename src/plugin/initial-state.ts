/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) initial state file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModalPluginState } from "./types";

/**
 * Internal [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) slice initial state
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
const modalInitialState: ModalPluginState = {
  isVisible: false,
  type: null,
  context: {},
};

export default modalInitialState;
