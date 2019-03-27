import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function intValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const dot = '.';
    const value = control.value;
    const isNumeric = isNaN(parseFloat(value)) && isFinite(value);
    const isInteger = Number.isInteger(+value);

    return (isNumeric) ? {isNotNumber: true} :
      (!isInteger ||  value.includes(dot)) ? {isNotInteger: true} : null;
  };
}
