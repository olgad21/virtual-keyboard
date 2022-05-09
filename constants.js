const arrOfKeys = [
  [
    {
      en: '1', ru: '1', code: 'Digit1', shiftValue: '!',
    }, {
      en: '2', ru: '2', code: 'Digit2', shiftValue: '@',
    }, {
      en: '3', ru: '3', code: 'Digit3', shiftValue: '#',
    }, {
      en: '4', ru: '4', code: 'Digit4', shiftValue: '$',
    }, {
      en: '5', ru: '5', code: 'Digit5', shiftValue: '%',
    }, {
      en: '6', ru: '6', code: 'Digit6', shiftValue: '^',
    }, {
      en: '7', ru: '7', code: 'Digit7', shiftValue: '&',
    }, {
      en: '8', ru: '8', code: 'Digit8', shiftValue: '*',
    }, {
      en: '9', ru: '9', code: 'Digit9', shiftValue: '(',
    }, {
      en: '0', ru: '0', code: 'Digit0', shiftValue: ')',
    }, {
      en: '-', ru: '-', code: 'Minus', shiftValue: '_',
    }, {
      en: '=', ru: '=', code: 'Equal', shiftValue: '+',
    }, { en: 'backspace', ru: 'backspace', code: 'Backspace' }],
  [{ en: 'keyboard_tab', ru: 'keyboard_tab', code: 'Tab' }, { en: 'q', ru: 'й', code: 'KeyQ' }, { en: 'w', ru: 'ц', code: 'KeyW' }, { en: 'e', ru: 'у', code: 'KeyE' }, { en: 'r', ru: 'к', code: 'KeyR' }, { en: 't', ru: 'е', code: 'KeyT' }, { en: 'y', ru: 'н', code: 'KeyY' }, { en: 'u', ru: 'г', code: 'KeyU' }, { en: 'i', ru: 'ш', code: 'KeyI' }, { en: 'o', ru: 'щ', code: 'KeyO' }, { en: 'p', ru: 'з', code: 'KeyP' }, {
    en: '[', ru: 'х', code: 'BracketLeft', shiftValue: '{',
  }, {
    en: ']', ru: 'ъ', code: 'BracketRight', shiftValue: '}',
  }, {
    en: '\\', ru: 'ё', code: 'Backslash', shiftValue: '|',
  }],
  [{ en: 'keyboard_capslock', ru: 'keyboard_capslock', code: 'CapsLock' }, { en: 'a', ru: 'ф', code: 'KeyA' }, { en: 's', ru: 'ы', code: 'KeyS' }, { en: 'd', ru: 'в', code: 'KeyD' }, { en: 'f', ru: 'а', code: 'KeyF' }, { en: 'g', ru: 'п', code: 'KeyG' }, { en: 'h', ru: 'р', code: 'KeyH' }, { en: 'j', ru: 'о', code: 'KeyJ' }, { en: 'k', ru: 'л', code: 'KeyK' }, { en: 'l', ru: 'д', code: 'KeyL' }, {
    en: ';', ru: 'ж', code: 'Semicolon', shiftValue: ':',
  }, {
    en: "'", ru: 'э', code: 'Quote', shiftValue: '"',
  }, { en: 'keyboard_return', ru: 'keyboard_return', code: 'Enter' }],
  [{ en: 'arrow_upward', ru: 'arrow_upward', code: 'ShiftLeft' }, {
    en: '`', ru: ']', code: 'IntlBackslash', shiftValue: '~',
  }, { en: 'z', ru: 'я', code: 'KeyZ' }, { en: 'x', ru: 'ч', code: 'KeyX' }, { en: 'c', ru: 'с', code: 'KeyC' }, { en: 'v', ru: 'м', code: 'KeyV' }, { en: 'b', ru: 'и', code: 'KeyB' }, { en: 'n', ru: 'т', code: 'KeyN' }, { en: 'm', ru: 'ь', code: 'KeyM' }, {
    en: ',', ru: 'б', code: 'Comma', shiftValue: '<',
  }, {
    en: '.', ru: 'ю', code: 'Period', shiftValue: '>',
  }, {
    en: '/', ru: '/', code: 'Slash', shiftValue: '?',
  }, { en: 'expand_less', ru: 'expand_less', code: 'ArrowUp' }, { en: 'arrow_upward', ru: 'arrow_upward', code: 'ShiftRight' }],
  [{ en: 'language', ru: 'language', code: 'Fn' }, { en: 'keyboard_control_key', ru: 'keyboard_control_key', code: 'ControlLeft' }, { en: 'keyboard_option_key', ru: 'keyboard_option_key', code: 'AltLeft' }, { en: 'keyboard_command_key', ru: 'keyboard_command_key', code: 'MetaLeft' }, { en: 'space_bar', ru: 'space_bar', code: 'Space' }, { en: 'keyboard_command_key', ru: 'keyboard_command_key', code: 'MetaRight' }, { en: 'keyboard_option_key', ru: 'keyboard_option_key', code: 'AltRight' }, { en: 'chevron_left', ru: 'chevron_left', code: 'ArrowLeft' }, { en: 'expand_more', ru: 'expand_more', code: 'ArrowDown' }, { en: 'chevron_right', ru: 'chevron_right', code: 'ArrowRight' }],
];

export default arrOfKeys;
