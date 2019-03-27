import { Injectable } from '@angular/core';
import {User} from '../form/data/user';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ShareService {
  props: string[];
  usersList: User[] = [];
  uniqueUser: User;
  id: number;


  constructor() {
    this.props = ['firstName',
      'lastName',
      'middleName',
      'dateOfBirth',
      'sex',
      'originCountry',
      'address',
      'mothersMaidenName',
      'keyWord',
      'infoSource',
      'friendsEmail',
      'phoneNumber',
      'extraInfo',
      'cardNumber',
      'term',
      'codeType',
      'cardType'
    ];
  }

  getUserInfo(form: FormGroup, id: number) {
    if (!form.valid) {
      this.uniqueUser = new User;
      this.props.forEach(item => {
        if (form.controls[item] !== undefined) {
          this.uniqueUser[item] = form.controls[item].value;
        }
      });
      if (this.usersList.length > 0) {
        this.usersList[id] = this.uniqueUser;
      } else {
        this.usersList.push(this.uniqueUser);
      }
    } else {
      return alert('Форма заполнена некорретно или не заполены все поля');
    }
  }

  setUserInfo(form: FormGroup, id: number) {
    const user = id > 0 || this.usersList.length !== 1 ? this.usersList[id] : this.uniqueUser;
    for (const prop in user) {
      if (prop !== undefined && form.controls[prop] !== undefined) {
        form.controls[prop].setValue(user[prop]);
      }
    }
  }

  setId(id: number) {
    this.id = id;
    console.log(this.id);
  }
}
