import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserEditorComponent} from './form/user-editor/user-editor.component';
import {RegistrationComponent} from './form/registration/registration.component';
import {CreditCardComponent} from './form/credit-card/credit-card.component';
import {ResultComponent} from './form/result/result.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FormComponent} from './form/form.component';
import {EditorInfoMessageGuard} from './guards/editor-info-message.guard';
import {CardInfoMessageGuard} from './guards/card-info-message.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'form', component: FormComponent, children: [
      {path: 'userEdit/:id', canDeactivate: [ EditorInfoMessageGuard ], component: UserEditorComponent,  outlet: 'form'},
      {path: 'creditCard', canDeactivate: [ CardInfoMessageGuard ], component: CreditCardComponent, outlet: 'form'},
      {path: 'result', component: ResultComponent, outlet: 'form'},
    ]},
  {path: 'error', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
