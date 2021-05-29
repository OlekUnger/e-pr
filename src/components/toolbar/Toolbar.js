import { BaseComponent } from '../../core/BaseComponent';

export class Toolbar extends BaseComponent {
    static className = 'toolbar'

    constructor(rootElement) {
        super(rootElement, {
            name: 'Toolbar',
            listeners: ['click']
        })
    }

    toHTML() {
        return `
            <div class="toolbar_button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="toolbar_button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="toolbar_button">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="toolbar_button">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="toolbar_button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="toolbar_button">
                <i class="material-icons">format_underline</i>
            </div>
        `
    }

    onClick(event) {
        console.log(event.target)
    }
}
