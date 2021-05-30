class Dom {
    constructor(selector) {
        this.nativeElement = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.nativeElement.innerHTML = html
            return this
        }
        return this.nativeElement.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        node = node instanceof Dom ? node.nativeElement : node
        if (Element.prototype.append) {
            this.nativeElement.append(node)
        } else {
            this.nativeElement.appendChild(node)
        }
        return this
    }

    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            this.nativeElement.style[key] = styles[key]
        })
    }

    // findAll(selector) {
    //     return this.nativeElement.querySelectorAll()
    // }

    // get data() {
    //     return this.nativeElement.dataset
    // }

    // getCoords(elem) {
    //     return elem.getBoundingClientRect()
    // }

    // on(eventType, fn) {
    //     this.nativeElement.addEventListener(eventType, fn)
    // }
}

export function $(selector) {
    return new Dom(selector)
}

$.createElement = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
