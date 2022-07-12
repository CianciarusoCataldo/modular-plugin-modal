/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) type definitions
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ModularEngineCustomState,
  ModularEnginePlugin,
} from "modular-engine-types";

/**
 * [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) state slice
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type ModalPluginState = ModularEngineCustomState<{
  isVisible: boolean;
  type: string | null;
  context: Record<string, any>;
}>;

/**
 * [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) callback
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPluginCallback = (
  context: ModalPluginState["context"] | null
) => any;

/**
 *[modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) config settings
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPluginSettings = ModularEngineCustomState<{
  onModalClose?: ModalPluginCallback[];
  onModalOpen?: ModalPluginCallback[];
}>;

/**
 *[modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) interface

 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPlugin = ModularEnginePlugin<{ modal?: ModalPluginSettings }>;
