import { writable } from 'svelte/store';
import { Global } from "./Global";

let language = new Global('language')
    !language.value ? language._set('pl') : null ;

export const Lang = writable(language.value);

