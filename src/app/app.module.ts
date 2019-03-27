import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ChatComponent } from './chat/chat.component';
import { CreditCardComponent } from './form/credit-card/credit-card.component';
import { ResultComponent } from './form/result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './form/registration/registration.component';
import { UserEditorComponent } from './form/user-editor/user-editor.component';
import { TooltipComponent } from './form/result/tooltip/tooltip.component';
import { ShareService } from './services/share.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChatComponent,
    CreditCardComponent,
    ResultComponent,
    RegistrationComponent,
    UserEditorComponent,
    TooltipComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
