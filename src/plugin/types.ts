/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) type definitions
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
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
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type ModalPluginState = ModularEngineCustomState<{
  /** modal visibility */
  isVisible: boolean;

  /** modal form type */
  type: string | null;

  /** modal context data */
  context: Record<string, any>;
}>;

/**
 * [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) callback
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
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
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=config
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPluginSettings = ModularEngineCustomState<{
  /** Functions called everytime the modal is closed */
  onModalClose?: ModalPluginCallback[];

  /** Functions called everytime the modal is opened */
  onModalOpen?: ModalPluginCallback[];
}>;

/**
 *[modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) interface
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPlugin = ModularEnginePlugin<{ modal?: ModalPluginSettings }>;
