import { createState } from "../HtmlState/start.js";
import { getDomManipulation } from "../DomManipulation/start.js";
import { normalizeConfig } from "../Utils/normalizeConfig.js";
import { createStore } from "../TableStore/V3/start.js";
import KeshavUIClasses from "../uiClasses.js";
import { loadDataFlow } from "./loadDataFlow.js";
import { setupServices } from "../Services/setupServices.js";
import mountCreate from "../UI/mountCreate.js";
import { configureDataStore } from "./configureDataStore.js";
import { mergeUIClasses } from "./mergeUIClasses.js";

class KSAiVertical {
    static defaults = {
        classes: KeshavUIClasses
    };

    constructor(inConfig) {
        const config = normalizeConfig(inConfig);
        const {
            containerId,
            options,
            endPoints,
            columnsConfig,
            uiClasses,
            callbacks
        } = config;

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        if (!this.containerEl) {
            throw new Error(`Container not found: ${containerId}`);
        }

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);
        this.uiClasses = mergeUIClasses(KSAiVertical.defaults.classes, uiClasses);

        configureDataStore({
            dataStore: this.dataStore,
            columnsConfig
        });

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
        this.callbacks = callbacks || {};
    }

    setupServices() {
        this.services = setupServices({
            config: this.config,
            dataStore: this.dataStore
        });
    }

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
    }
}

export default KSAiVertical;
