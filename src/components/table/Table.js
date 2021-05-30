import { BaseComponent } from '../../core/BaseComponent'
import { createTable } from './table.template';
import { tableResizeHandler } from './table.resize';

export class Table extends BaseComponent {
    static className = 'table'

    constructor(rootElement) {
        super(rootElement, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(20)
    }

    // onClick(event) {
    //     console.log('click', event.target)
    // }

    onMousedown(event) {
        if (event.target.dataset['resize']) {
            tableResizeHandler(this.Element.nativeElement, event)
        }
    }

    // onMousemove() {
    //     console.log('mousemove')
    // }
    //
    // onMouseup() {
    //     console.log('mouseup')
    // }

    // 65 ms  Scripting
    // 372 ms  Rendering
    // 64 ms  Painting
    // 94 ms  System

    // 41 ms  Scripting
    // 192 ms  Rendering
    // 94 ms  Painting
    // 177 ms  System
    // 14541 ms  Idle
    // 15044 ms  Total
}
