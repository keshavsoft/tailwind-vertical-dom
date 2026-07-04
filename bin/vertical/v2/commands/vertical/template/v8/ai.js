// ai.js
// import "./components/v9/index.js";

import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { prepareColumnsBundle } from "./Utils/prepareColumnsBundle.js";
import { normalizeConfig } from "./Utils/normalizeConfig.js";

import { createStore } from "./TableStore/V3/start.js";
import KeshavUIClasses from "./uiClasses.js";
import { loadDataFlow } from "./Core/loadDataFlow.js";

import { setupServices } from "./Services/setupServices.js";

import mountCreate from "./UI/mountCreate.js";

class KSAiVertical {
    static defaults = {
        classes: KeshavUIClasses
    };

    constructor(inConfig) {
        let config = normalizeConfig(inConfig);

        const { containerId, options, endPoints, columnsConfig,
            uiClasses, callbacks } = config;
        console.log("bbbbbbbbbbbbbbbbb========== : ", inConfig);

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        if (!this.containerEl) {
            throw new Error(`Container not found: ${containerId}`);
        };

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);
        this.uiClasses = this.mergeUI(KSAiVertical.defaults.classes, uiClasses);

        const bundle = prepareColumnsBundle(columnsConfig);

        this.dataStore.setColumns(bundle.keys);
        this.dataStore.setVisibleColumns(bundle.visibleColumns);
        this.dataStore.setVisibleConfig(bundle.visibleConfig);
        this.dataStore.setDefaultRow(bundle.defaultRow);
        this.dataStore.setDataListColumns(bundle.dataListColumns);
        this.dataStore.setToSaveRow(bundle.toSaveRow);
        this.dataStore.setSearchableColumnsConfig(bundle.searchableColumnsConfig);

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
        // constructor
        this.callbacks = callbacks || {};
    };

    mergeUI(defaults, incoming = {}) {
        return {
            ...defaults,
            ...incoming,
            form: {
                ...defaults.form,
                ...incoming.form
            }
        };
    };

    setupServices() {
        this.services = setupServices({
            config: this.config,
            dataStore: this.dataStore
        });
    };

    async initCreate() {
        this.setupServices();

        await loadDataFlow({
            config: this.config,
            services: this.services,
            dataStore: this.dataStore,
            endPoints: this.endPoints
        });

        mountCreate({
            containerEl: this.containerEl,
            dataStore: this.dataStore,
            dom: this.dom,
            services: this.services,
            options: this.options,
            endPoints: this.endPoints,
            columnsConfig: this.columnsConfig,
            uiClasses: this.uiClasses,
            callbacks: this.callbacks,
            inConfig: this.config,
            inShowFooter: true
        });
    };
};

window.KSAiVertical = KSAiVertical;

window.KSAiVertical.defaults = KSAiVertical.defaults;

export default KSAiVertical;