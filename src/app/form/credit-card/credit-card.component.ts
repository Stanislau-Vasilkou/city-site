import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../validators/error-handler.service';
import {Router} from '@angular/router';
import {User} from '../data/user';
import {intValidator} from '../validators/intValidator';
import {ShareService} from '../../services/share.service';
import {CardInfoMessageGuard} from '../../guards/card-info-message.guard';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css', '../../../custom.css']
})
export class CreditCardComponent implements OnInit {
  cardForm: FormGroup;
  user: User;

  constructor(private errorHandler: ErrorHandlerService,
              private _router: Router,
              private share: ShareService,
              private guard: CardInfoMessageGuard) {
  }

  ngOnInit() {
    this.guard.saved = false;
    this.user = this.share.uniqueUser;
    this.cardForm = new FormGroup({
      cardNumber: new FormControl(null, {
        validators: [Validators.required, intValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      term: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      codeType: new FormControl(null, {
        validators: [Validators.required, intValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      cardType: new FormControl('дебетовая', {
        validators: [Validators.required],
        asyncValidators: [],
        // updateOn: 'blur'
      })
    });
    this.setUserInfo(this.share.uniqueUser);
  }
    catchError(controlName) {
      return this.errorHandler.getErrMsg(controlName, this.cardForm );
    }

    isInvalid(controlName) {
      return this.errorHandler.isControlInvalid(controlName, this.cardForm);
    }

  getUserInfo() {
    if (!this.cardForm.valid) {
      this.share.props.forEach(item => {
        if (this.cardForm.controls[item] !== undefined) {
          this.user[item] = this.cardForm.controls[item].value;
        }
      });
      this.share.uniqueUser = this.user;
      this.guard.saved = true;
      this.goTab('form/(form:result)');
    } else {
      return alert('Форма заполнена некорректно или не заполены все поля');
    }
  }

  goTab(url: string) {
    this._router.navigateByUrl(url);
  }

  setUserInfo(user: User) {
    for (let prop in user) {
      if (prop !== undefined && this.cardForm.controls[prop] !== undefined) {
        this.cardForm.controls[prop].setValue(user[prop]);
      }
    }
  }
}
