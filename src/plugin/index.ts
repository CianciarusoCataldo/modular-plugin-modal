/**
 * @file [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) file
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModalPlugin } from "./types";
import initialState from "./initial-state";
import * as actions from "./actions";
import modalReducer from "./reducer";

/**
 * [modular-plugin-modal](https://github.com/CianciarusoCataldo/modular-plugin-modal) plugin. Extends [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) 
 * system with a modal manager, to drive the web app modal with global actions and centralized values for visibility and, optionally, additional data associated with every modal.
 * To use it, add it to `plugins` array inside modular-engine config
 *
 * @example <caption> Use modal plugin with modular-engine </caption>
 *
 * //Inside your engine.config.js/ts file
 *
 * const modalPlugin = require("modular-plugin-modal");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [modalPlugin],
 *   modal: {
 *     onModalClose: [() => alert("modal closed")],
 *     onModalOpen: [() => alert("modal opened")],
 *   },
 * };
 *
 * module.exports = { config };
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-modal
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const modalPlugin: ModalPlugin = () => ({
  feature: "modal",
  create: (config) => {
    const modalConfig = config.modal || {};

    return {
      field: "modal",
      content: {
        onModalClose: modalConfig.onModalClose || [],
        onModalOpen: modalConfig.onModalOpen || [],
      },
    };
  },
  redux: (config) => ({
    slice: "modal",
    effects: modalReducer,
    initialState,
  }),
  format: (config, enabledPlugins) => {
    let input = { ...config };

    if (enabledPlugins.urlChecker) {
      input.urlChecker.queryParameters["modal"] = ({
        urlParam,
        config: inputConfig,
        store,
      }) => {
        urlParam && store.dispatch(actions.openModal(urlParam));

        return inputConfig;
      };

      input.urlChecker.after.push("modal");
    }

    return input;
  },
  before: ({ config }) => {
    let input = { ...config };

    const callBacks = {
      onModalClose: (context) => {
        input.modal.onModalClose.forEach((callback) => {
          callback(context);
        });
      },
      onModalOpen: (context) => {
        input.modal.onModalOpen.forEach((callback) => {
          callback(context);
        });
      },
    };

    input.redux?.middlewares?.push((action, state) => {
      switch (action.type) {
        case actions.openModal.type: {
          callBacks.onModalOpen(state.modal.context);
          break;
        }

        case actions.closeModal.type: {
          callBacks.onModalClose(state.modal.context);
          break;
        }
      }
    });
  },
});

export default modalPlugin;
