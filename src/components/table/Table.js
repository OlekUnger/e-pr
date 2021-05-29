import { BaseComponent } from '../../core/BaseComponent'
import { createTable } from './table.template';

export class Table extends BaseComponent {
    static className = 'table'

    toHTML() {
        return createTable(20)
    }
}
