import { DomListener } from './DomListener';

export class BaseComponent extends DomListener {
    constructor(rootElement, options = {}) {
        super(rootElement, options.listeners)
        this.name = options.name
    }

    /* возвращает шшаблон компонента */
    toHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
    }
}
