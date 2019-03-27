import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditorComponent } from '../form/user-editor/user-editor.component';

@Injectable({
  providedIn: 'root'
})
export class EditorInfoMessageGuard implements CanDeactivate<any> {
  saved: boolean = false;
  canDeactivate(
    component: UserEditorComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.userForm.pristine || this.saved) {
      return true;
    }
      return confirm('Несохраненные данные будут утеряны! Покинуть страницу?');
  }
}
