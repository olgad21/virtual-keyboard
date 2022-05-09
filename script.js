import Key from './classes/key';
import arrOfKeys from './constants';

const functionalKeys = [];

// Generate DOM (without keyboard)
const title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'macOS Virtual Keyboard (en-ru)';
document.body.prepend(title);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
title.after(textarea);

const subtitle = document.createElement('p');
subtitle.className = 'subtitle';
subtitle.innerHTML = 'Click <i class="material-symbols-outlined">language</i> or press Ctrl+Option to change the language';
title.after(subtitle);

// Click handler for the Shift key
function toggleShiftByClick(e, keyboardInstance) {
  if (e.target.textContent === 'arrow_upward') {
    keyboardInstance.handleShift();
  }
}

// Click handler for the Keyboard
function keyboardClickHandler(e, instance) {
  const keyboardInstance = instance;
  if (e.target.textContent === 'language') {
    keyboardInstance.lang = keyboardInstance.lang === 'ru' ? 'en' : 'ru';
    window.localStorage.setItem('lang', JSON.stringify(keyboardInstance.lang));
    keyboardInstance.initialize();
  }

  if (e.target.classList.contains('keyboard__key')) {
    if (functionalKeys.includes(e.target)) {
      if (e.target.textContent === 'space_bar') { textarea.textContent += ' '; }
      if (e.target.textContent === 'keyboard_tab') { textarea.textContent += '    '; }
      if (e.target.textContent === 'keyboard_return') { textarea.textContent += '\n'; }
      if (e.target.textContent === 'backspace') {
        textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);
      }
      if (e.target.textContent === 'keyboard_capslock') {
        keyboardInstance.capsLock = !keyboardInstance.capsLock;
        keyboardInstance.handleCapslock();
      }
      if (e.target.textContent === 'chevron_left') { textarea.textContent += '↽'; }
      if (e.target.textContent === 'chevron_right') { textarea.textContent += '⇁'; }
      if (e.target.textContent === 'expand_more') { textarea.textContent += '⇂'; }
      if (e.target.textContent === 'expand_less') { textarea.textContent += '↾'; }
      textarea.textContent += '';
    } else {
      textarea.textContent += e.target.textContent;
    }
  }
}

class Keyboard {
  lang = JSON.parse(window.localStorage.getItem('lang')) || 'en';

  elements = {
    keyboard: null,
    keysContainer: null,
    keys: [],
  };

  capsLock = false;

  // Add keyboard to DOM
  initialize() {
    const keyboard = document.getElementsByClassName('keyboard')[0];

    // Delete previous keyboard state and initialize keyboard elements
    if (keyboard) {
      keyboard.remove();
      this.elements.keys = [];
      this.keyboard = null;
      this.keysContainer = null;
    }

    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.className = 'keyboard';
    this.elements.keyboard.addEventListener('mousedown', (e) => keyboardClickHandler(e, this));
    this.elements.keyboard.addEventListener('mousedown', (e) => toggleShiftByClick(e, this));
    this.elements.keyboard.addEventListener('mouseup', (e) => toggleShiftByClick(e, this));

    textarea.after(this.elements.keyboard);

    this.elements.keysContainer = document.createElement('div');
    this.elements.keysContainer.className = 'keyboard__keys';
    this.elements.keyboard.prepend(this.elements.keysContainer);

    this.elements.keysContainer.append(...this.createKeys());

    // Add animation to keys
    this.elements.keys.forEach((key) => {
      key.addEventListener('mousedown', () => {
        key.classList.add('keyboard__key--active');
      });

      key.addEventListener('mouseup', () => {
        key.classList.remove('keyboard__key--active');
      });
    });
  }

  createKeys() {
    let key;

    const arrOfRows = arrOfKeys.map((keyRow) => {
      const row = document.createElement('div');
      row.classList.add('row');

      keyRow.forEach((keyButton) => {
        const button = keyButton;
        if (keyButton[this.lang].length < 2) {
          if (this.capsLock) {
            button[this.lang] = keyButton[this.lang].toUpperCase();
          } else {
            button[this.lang] = keyButton[this.lang].toLowerCase();
          }
        }

        key = new Key(keyButton[this.lang]).generateKeys();
        key.classList.add(keyButton.code);
        if (keyButton.shiftValue) {
          key.classList.add('shiftValue');
          key.setAttribute('data-shiftvalue', keyButton.shiftValue);
        }
        if (key.classList.contains('material-symbols-outlined')) {
          functionalKeys.push(key);
        }
        this.elements.keys.push(key);
        row.append(key);
      });
      return row;
    });
    return arrOfRows;
  }

  toggleCapslock(e) {
    if (e.getModifierState('CapsLock')) {
      this.capsLock = true;
    } else { this.capsLock = false; }
  }

  handleCapslock() {
    this.elements.keys.forEach((key) => {
      const button = key;
      if (!functionalKeys.includes(button)) {
        if (this.capsLock) {
          button.textContent = button.textContent.toUpperCase();
        } else {
          button.textContent = button.textContent.toLowerCase();
        }
      }
    });
  }

  toggleShift(e) {
    if (e.key === 'Shift') {
      this.handleShift();
    }
  }

  handleShift() {
    this.elements.keys.forEach((key) => {
      const button = key;
      if (!functionalKeys.includes(button)) {
        if (button.classList.contains('shiftValue')) {
          const temp = button.getAttribute('data-shiftvalue');
          button.dataset.shiftvalue = button.textContent;
          button.textContent = temp;
          return;
        }
        button.textContent = button.textContent === button.textContent.toUpperCase()
          ? button.textContent.toLowerCase() : button.textContent.toUpperCase();
      }
    });
  }

  changeLanguageByKeyboard(e) {
    if ((e.key === 'Control' && e.altKey)
            || (e.key === 'Alt' && e.ctrlKey)) {
      this.lang = this.lang === 'ru' ? 'en' : 'ru';
      window.localStorage.setItem('lang', JSON.stringify(this.lang));
      this.initialize();
    }
  }

  static getKeyValueByCode(e, code) {
    const key = document.querySelector(`.${code}`);
    key.classList.add('keyboard__key--active');
    if (functionalKeys.includes(key)) {
      if (e.code === 'Space') { return ' '; }
      if (e.code === 'Tab') { return '    '; }
      if (e.code === 'Enter') { return '\n'; }
      if (e.code === 'ArrowLeft') { return '↽'; }
      if (e.code === 'ArrowRight') { return '⇁'; }
      if (e.code === 'ArrowDown') { return '⇂'; }
      if (e.code === 'ArrowUp') { return '↾'; }
      return '';
    }
    return key.textContent;
  }
}

const keyboard = new Keyboard();
keyboard.initialize();

textarea.addEventListener('keydown', (e) => {
  e.preventDefault();
});

window.addEventListener('keydown', (e) => {
  keyboard.changeLanguageByKeyboard(e);
  keyboard.toggleShift(e);

  textarea.textContent += Keyboard.getKeyValueByCode(e, e.code);

  if (e.code === 'CapsLock') {
    keyboard.toggleCapslock(e);
    keyboard.handleCapslock();
  }
  if (e.code === 'Backspace') {
    textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);
  }

  textarea.selectionStart = textarea.textContent.length;
});

window.addEventListener('keyup', (e) => {
  keyboard.elements.keys.forEach((key) => {
    key.classList.remove('keyboard__key--active');
  });

  keyboard.toggleShift(e);

  if (e.code === 'CapsLock') {
    keyboard.toggleCapslock(e);
    keyboard.handleCapslock();
  }
});
