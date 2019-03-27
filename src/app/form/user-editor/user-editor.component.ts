import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../validators/error-handler.service';
import {User} from '../data/user';
import {countries} from '../data/countries';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../services/share.service';
import {alphabetValidator} from '../validators/alphabetValidator';
import {EditorInfoMessageGuard} from '../../guards/editor-info-message.guard';
import {footballClubs} from '../data/footballClubs';
import {DayTemplateContext} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';
import {map} from 'rxjs/operators';




@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css', '../../../custom.css']
})

export class UserEditorComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  countriesList = countries;
  fcTeams = footballClubs;
  id: number;
  active = 'active';
  date: object;

  @Input() dayTemplate: TemplateRef<DayTemplateContext>;

  constructor(private errorHandler: ErrorHandlerService,
              private _router: Router,
              private router: ActivatedRoute,
              private share: ShareService,
              private guard: EditorInfoMessageGuard) {
    this.id = this.share.id || 0;
  }

  ngOnInit() {
    this.guard.saved = false;
    this.userForm = new FormGroup({
      firstName: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      lastName: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      middleName: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      dateOfBirth: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      sex: new FormControl('Мужской', {
        validators: [],
        asyncValidators: [],
        // updateOn: 'blur'
      }),
      originCountry: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      address: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      mothersMaidenName: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      keyWord: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      infoSource: new FormControl(null, {
        validators: [Validators.required, alphabetValidator()],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      friendsEmail: new FormControl(null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      phoneNumber: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      extraInfo: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
    });
   console.log(this.userForm.controls.dateOfBirth.valueChanges.pipe(
      map(value => {
        let date: string;
        if (value !== undefined) {
          date = value['day'] + '/' + value['month'] + '/' + value['year'];
          return date;
        }
      })
    ).subscribe(date => date));
    this.setUserInfo(this.id);
  }

  catchError(controlName) {
    return this.errorHandler.getErrMsg(controlName, this.userForm );
  }

  isInvalid(controlName) {
    return this.errorHandler.isControlInvalid(controlName, this.userForm);
  }

  setUserInfo(id: number) {
    this.share.setUserInfo(this.userForm, id);
  }

  getUserInfo(id: number) {
    this.share.getUserInfo(this.userForm, id);
    this.goTab('form/(form:creditCard)');
  }

  goTab(url: string) {
    this._router.navigateByUrl(url);
  }
}
