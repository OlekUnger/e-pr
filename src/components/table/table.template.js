const CODES = {
    A: 65,
    Z: 90
}

function createRow(content, index = '') {
    const resize = index ? `<div class="row-resize" data-resize="row"></div>` : ''
    return `
        <div class="row" data-row="${index}" data-type="resizable">
            <div class="row_info">${index}${resize}</div>
            <div class="row_data">${content}</div>
        </div>
    `
}

function createCol(content, index) {
    return `<div class="column" data-type="resizable" data-col="${index}">${content}
                <div class="column-resize" data-resize="col"></div>
           </div>
        `
}

function createCell(_, index) {
    return `<div class="cell" data-col="${index}" contenteditable></div>`
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
