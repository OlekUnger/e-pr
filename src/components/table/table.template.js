const CODES = {
    A: 65,
    Z: 90
}

function createRow(content, index = '') {
    return `
        <div class="row">
            <div class="row_info">${index}</div>
            <div class="row_data">${content}</div>
        </div>
    `
}

function createCol(content) {
    return `<div class="column">${content}</div>`
}

function createCell() {
    return `<div class="cell" contenteditable></div>`
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map((el, index) => String.fromCharCode(CODES.A + index))
        .map(createCol).join('')

    rows.push(createRow(cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount).fill('').map(createCell).join('')
        rows.push(createRow(cells, i + 1))
    }
    return rows.join('')
}
