import { Injectable } from '@angular/core';
import {RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {CreditCardComponent} from '../form/credit-card/credit-card.component';

@Injectable({
  providedIn: 'root'
})
export class CardInfoMessageGuard implements CanDeactivate<any> {
  saved: boolean = false;
  canDeactivate(
    component: CreditCardComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.cardForm.pristine || this.saved) {
      return true;
    }
    return confirm('Несохраненные данные будут утеряны! Покинуть страницу?');
  }
}
