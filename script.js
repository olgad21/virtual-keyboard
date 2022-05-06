class Key {
    constructor(keyValue, code){
        this.code = code;
        this.keyValue = keyValue;
    }

    generateKeys(){ 
        let key = document.createElement('div');
        key.className = 'keyboard__key';
        // key.setAttribute('data-key', this.code);
        key.innerHTML = this.keyValue;
        if(this.keyValue === 'space_bar'){
            key.classList.add('keyboard__key--extra-wide');
        }
        if(this.keyValue.length > 2){
            key.classList.add('material-symbols-outlined');
        }
        if(this.keyValue.length > 2 && 
            !this.keyValue.includes('chevron') && 
            !this.keyValue.includes('expand') &&
            !this.keyValue.includes('command') &&
            !this.keyValue.includes('option') && 
            !this.keyValue.includes('control')){
            key.classList.add('keyboard__key--wide');
        }

        return key;
    }
}

const title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'macOS Virtual Keyboard (en-ru)'
document.body.prepend(title);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
title.after(textarea);


class Keyboard {
    lang ='en';

    elements = {
        keyboard: null,
        keysContainer: null,
        keys: []
    };

    initialize() {
        // вот тут добавил
        const keyboard =  document.getElementsByClassName('keyboard')[0];
        if (keyboard) {
            keyboard.remove();
            this.elements.keys = [];
            this.keyboard = null;
            this.keysContainer = null;
        }
        // до сих пор/ чуть что можешь стереть
        //

        textarea.focus();
        
        this.elements.keyboard = document.createElement("div");
        this.elements.keyboard.className = 'keyboard';
        textarea.after(this.elements.keyboard);


        this.elements.keysContainer = document.createElement("div");
        this.elements.keysContainer.className = 'keyboard__keys';
        this.elements.keyboard.prepend(this.elements.keysContainer);

        this.elements.keysContainer.append(...this._createKeys());
    };

    _createKeys(){
        let key;

        const arrOfKeys = [
            [{ en: 1, ru: 1}, { en: 2, ru: 2 }, { en: 3, ru: 3}, { en: 4, ru: 4}, { en: 5, ru: 5}, { en: 6, ru: 6},{ en: 7, ru: 7}, { en: 8, ru: 8},{ en: 9, ru: 9}, { en: 0, ru: 0},{ en: '-', ru: '-'}, { en: '=', ru: '='},{ en: 'backspace', ru: 'backspace'}],
            [{ en: 'keyboard_tab', ru: 'keyboard_tab'}, { en: 'q', ru: 'й'}, { en: 'w', ru: 'ц'}, { en: 'e', ru: 'у'}, { en: 'r', ru: 'к'}, { en: 't', ru: 'е'}, { en: 'y', ru: 'н'}, { en: 'u', ru: 'г'}, { en: 'i', ru: 'ш'}, { en: 'o', ru: 'щ'}, { en: 'p', ru: 'з'}, { en: '[', ru: 'х'}, { en: ']', ru: 'ъ'}, { en: '\\', ru: 'ё'}],
            [{ en: 'keyboard_capslock', ru: 'keyboard_capslock'}, { en: 'a', ru: 'ф'}, { en: 's', ru: 'ы'}, { en: 'd', ru: 'в'}, { en: 'f', ru: 'а'}, { en: 'g', ru: 'п'}, { en: 'h', ru: 'р'}, { en: 'j', ru: 'о'}, { en: 'k', ru: 'л'}, { en: 'l', ru: 'д'}, { en: ';', ru: 'ж'}, { en:"'", ru: 'э'}, { en: 'keyboard_return', ru: 'keyboard_return'}],
            [{ en: 'arrow_upward', ru: 'arrow_upward'}, { en: '`', ru: ']'}, { en: 'z', ru: 'я'}, { en: 'x', ru: 'ч'}, { en: 'c', ru: 'с'}, { en: 'v', ru: 'м'}, { en: 'b', ru: 'и'}, { en: 'n', ru: 'т'}, { en: 'm', ru: 'ь'}, { en: ',', ru: 'б'}, { en: '.', ru: 'ю'}, { en: '/', ru: '/'}, { en: 'expand_less', ru: 'expand_less'}, { en: 'arrow_upward', ru: 'arrow_upward'}],
            [{ en: 'fn', ru: 'fn'}, { en: 'keyboard_control_key', ru: 'keyboard_control_key'}, { en: 'keyboard_option_key', ru: 'keyboard_option_key'}, { en: 'keyboard_command_key', ru: 'keyboard_command_key'}, { en: 'space_bar', ru: 'space_bar'}, { en: 'keyboard_command_key', ru: 'keyboard_command_key'}, { en: 'keyboard_option_key', ru: 'keyboard_option_key'}, { en: 'chevron_left', ru: 'chevron_left'}, { en: 'expand_more', ru: 'expand_more'}, { en: 'chevron_right', ru: 'chevron_right'}]
        ]

        const arrOfRows = arrOfKeys.map(keyRow => {
            const row = document.createElement('div');
            row.classList.add('row');

            keyRow.forEach(keyButton => {
                key = new Key(keyButton[this.lang]).generateKeys();
                this.elements.keys.push(key);
                row.append(key);
            })
            return row;
        });

        return arrOfRows;
    }

}

const keyboard = new Keyboard();

document.body.addEventListener('click', () => {
    keyboard.lang = keyboard.lang === 'ru' ? 'en' : 'ru';
    keyboard.initialize();
});


window.addEventListener('DOMContentLoaded', () => keyboard.initialize());


window.addEventListener('keydown', (e) => {
    
    for (const a of document.querySelectorAll('.keyboard__key')) {
        if (a.textContent.length < 2 && a.textContent.startsWith(`${e.key}`) && a.textContent.endsWith(`${e.key}`)) {
          a.classList.add('keyboard__key--active');
        }
    }
});

window.addEventListener('keyup', (e) => {
    for (const a of document.querySelectorAll('.keyboard__key--active')) {
        a.classList.remove('keyboard__key--active');
    }
});



