/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) slice selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal#selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineGlobalState } from "modular-engine-types";

import { createModularSelector } from "modular-engine-tools";

import { ModalPluginState } from "./types";

import modalInitialState from "./initial-state";

/**
 *
 * Returns [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) slice, or the default state if the plugin is not enabled
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal#selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalView = (
  state: ModularEngineGlobalState<{ modal?: ModalPluginState }>
): ModalPluginState => state.modal || modalInitialState;

/**
 * Returns the app modal visibility
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal#selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isModalVisible = createModularSelector(
  getModalView,
  ({ isVisible }) => isVisible
);

/**
 * Returns actually opened modal type, null if no modal is opened
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal#selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalType = createModularSelector(
  getModalView,
  ({ type }) => type
);

/**
 * Returns actual modal context
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal#selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalContext = createModularSelector(
  getModalView,
  ({ context }) => context
);
