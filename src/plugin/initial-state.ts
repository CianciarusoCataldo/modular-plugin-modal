/**
 * @file `modal` state slice initial state file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModalPluginState } from "./types";

/**
 * Internal `modal` slice initial state
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
