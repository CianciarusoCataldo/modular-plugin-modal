/**
 * @file[modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) actions, used to interact with app modal
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularAction } from "modular-engine-tools";

/**
 * Open the modal, with given context (default to empty object), only if given form type is defined
 *
 * @param {string} type modal form to open
 * @param {Record<string,any>} context (optional) custom data associated with given modal form type
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const openModal = createModularAction<{
  type: string;
  context?: Record<string, any>;
}>("@@modal/OPEN_MODAL", (type: string, context?: Record<string, any>) => ({
  type,
  context,
}));

/**
 * Close the modal, and reset the context
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const closeModal = createModularAction("@@modal/CLOSE_MODAL");

/**
 * Set modal context
 *
 * @param {Record<string,any>} context custom modal context to set
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalContext = createModularAction(
  "@@modal/SET_CONTEXT",
  (context: Record<string, any>) => ({ context: context })
);

/**
 * Set modal visibility
 *
 * @param {boolean} visibility new modal visibility
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalVisiblity = createModularAction(
  "@@modal/SET_VISIBILITY",
  (visibility: boolean) => ({ visibility })
);

/**
 * Set modal form type
 *
 * @param {string} type modal form type to set
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalForm = createModularAction(
  "@@modal/SET_FORM_TYPE",
  (type: string) => ({
    payload: { type },
  })
);
