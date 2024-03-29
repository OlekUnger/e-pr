import { BaseComponent } from '../../core/BaseComponent';

export class Header extends BaseComponent {
    static className = 'header'

    toHTML() {
        return `<input type="text" class="header_input" value="Новая таблица">
                <div>
                    <div class="header_button">
                        <i class="material-icons">delete</i>
                    </div>
                    <div class="header_button">
                        <i class="material-icons">exit_to_app</i>
                    </div>
                </div>`
    }
}
