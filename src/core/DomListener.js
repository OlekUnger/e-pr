import { capitalize } from './utils';

export class DomListener {
    constructor(rootElement, listeners = []) {
        if (!rootElement) {
            throw new Error('No $rootElement provided form dom listener')
        }
        this.Element = rootElement
        this.listeners = listeners
        // console.log(this.rootElement)
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented ${this.name ? 'in '+ this.name + ' Component' : ''}`)
            }
            this[method] = this[method].bind(this)
            this.Element.nativeElement.addEventListener(listener, this[method])
        })
    }

    removeDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.Element.nativeElement.removeEventListener(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
