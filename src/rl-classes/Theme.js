import {Global} from "./../rl-classes/Global";

export class Theme {

    constructor(_current) {
        this.body = document.querySelector('body')
        this.theme =  new Global('theme')
        !this.theme.value ? this._set(_current) : this._set(this.theme.value)

    }

    _set(theme) {
        this.body.classList = theme ;
        this.value = theme ;
        this.theme._set(theme)
    }

    _get() {
        return this.value
    }
}

export const Color = {
    _default: 'rl-default',
    _light: 'rl-light',
    _dark: 'rl-dark'
}
