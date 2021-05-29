import { BaseComponent } from '../../core/BaseComponent';

export class Formula extends BaseComponent {
    static className = 'formula'

    constructor(rootElement) {
        super(rootElement, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
            <div class="formula_info">fx</div>
            <div class="formula_input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log('Formula: onInput', event)
    }

    onClick(event) {
        console.log('click')
    }
}
