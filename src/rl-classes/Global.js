export class Global {

    constructor( name , value ) {

        this.name = name ;
        this.value = value ;

        try {

            if (JSON.parse(localStorage.getItem( this.name))) {
                console.log(`exist: ${name}`) ;
                this._load();
            } else {
                this._save();
            }
        }
        catch(e)
        {console.error(e)}

        return value;
    }

    _set(_var) {
        this.value = _var;
        this._save();
        return this;
    }

    _get() {
        return this.value
    }

    _log() {
        console.log(this.value);
        return this;
    }

    _save() {
        localStorage.setItem(this.name, JSON.stringify(this.value));
        console.log(`save: ${this.name} =`, this.value);
        return this;
    }

    _load()  {
        this.value = JSON.parse(localStorage.getItem( this.name)) ;
        console.log(`load:  ${this.name} =`, this.value);
        return this;
    }

}

