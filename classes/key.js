class Key {
  constructor(keyValue) {
    this.keyValue = keyValue;
  }

  // Adding each key to DOM with initial CSS classes
  generateKeys() {
    const key = document.createElement('div');
    key.className = 'keyboard__key';
    key.innerHTML = this.keyValue;

    if (this.keyValue === 'space_bar') {
      key.classList.add('keyboard__key--extra-wide');
    }
    if (this.keyValue.length > 2) {
      key.classList.add('material-symbols-outlined');
    }
    if (this.keyValue.length > 2
            && !this.keyValue.includes('chevron')
            && !this.keyValue.includes('expand')
            && !this.keyValue.includes('command')
            && !this.keyValue.includes('option')
            && !this.keyValue.includes('language')
            && !this.keyValue.includes('control')) {
      key.classList.add('keyboard__key--wide');
    }

    return key;
  }
}

export default Key;
