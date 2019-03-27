import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function alphabetValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const arr = control.value.split('');
      const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ\'-';
      const result = arr.every((item) => {
        return (alphabet.indexOf(item) >= 0);
      });
      return result ? null : {isNotAlphabet: true};
    }
  };
}
