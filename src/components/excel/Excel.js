import { $ } from '../../core/dom'

export class Excel {
    constructor(selector, options) {
        this.element = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const rootElement = $.createElement('div', 'excel')

        this.components = this.components.map((Component) => {
            const el = $.createElement('div', Component.className)
            const component = new Component(el)
            el.html(component.toHTML())
            rootElement.append(el)
            return component
        })

        return rootElement
    }

    render() {
        this.element.append(this.getRoot())
        this.components.forEach(c => c.init())
    }
}
