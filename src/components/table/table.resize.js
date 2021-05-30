export function tableResizeHandler(element, event) {
    const resizer = event.target
    const parent = resizer.closest('[data-type="resizable"]')
    const coords = parent.getBoundingClientRect()
    const type = resizer.dataset['resize']
    let valueX = 0
    let valueY = 0
    document.onmousemove = e => {
        if (type === 'col') {
            const deltaX = e.pageX - coords.right
            valueX = coords.width + deltaX
            resizer.style.right = -deltaX + 'px'
            resizer.style.bottom = '-5000px'
        } else {
            const deltaY = e.pageY - coords.bottom
            valueY = coords.height + deltaY
            resizer.style.bottom = - deltaY + 'px'
            resizer.style.right = '-5000px'
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        if (type === 'col') {
            parent.style.width = valueX + 'px'
            element.querySelectorAll(`[data-col="${parent.dataset['col']}"]`).forEach(el => el.style.width = valueX + 'px')
        } else {
            parent.style.height = valueY + 'px'
        }

        resizer.style.bottom = '0px'
        resizer.style.right = '0px'
    }
}
