export function capitalize(string) {
    if (typeof string !== 'string') return
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function css(elem, styles = {}) {
    Object.keys(styles).forEach(key => {
        elem.style[key] = styles[key]
    })
    return elem
}
