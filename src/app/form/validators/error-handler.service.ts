import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {errors} from './errors';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  getErrMsg(control: string, formName: FormGroup) {
    const inputController: AbstractControl = formName.controls[control];
    const errorCode: string[] = [];
    let err;
    for (const key in inputController.errors) {
      errorCode.push(key);
    }
    if (inputController.hasError(errorCode[0])) {
      err = errors[errorCode[0]];
    }
    return err;
  }

  isControlInvalid(controlName: string, formName: FormGroup): boolean {
    const control = formName.controls[controlName];
    const result = control.invalid && (control.touched || control.dirty);
    return result;
  }
}
