import {Component, OnInit} from '@angular/core';
import {CsvParserService} from '../../services/csv-parser.service';
import {User} from '../data/user';
import {ShareService} from '../../services/share.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../../custom.css']
})
export class RegistrationComponent implements OnInit {
  fileName: string;
  arr: string[];
  text: any;
  usersList: User[];
  regForm: FormGroup;

  constructor(private csvParser: CsvParserService,
              private share: ShareService,
              private _router: Router) {
  }

  ngOnInit() {
    this.regForm = new FormGroup({
      regType: new FormControl('personal', {
        validators: [],
        asyncValidators: [],
        // updateOn: 'blur'
      })
    });
  }

  setFileName(value: string) {
    this.arr = value.split('\\');
    this.fileName = this.arr[this.arr.length - 1];
  }

  getFile(event) {
    const file = event.target.files[0];
    this.placeFileContent(file);
  }

  placeFileContent(file) {
    this.readFileContent(file).then(content => {
      this.text = content;
    }).catch(error => console.log(error));
  }

  readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = error => reject(error);
      reader.readAsText(file, 'windows-1251');
    });
  }

  setUsersList() {
    if (this.regForm.controls['regType'].value === 'list' && this.fileName) {
      this.usersList = this.csvParser.parseCSVtoJSON(this.text);
      this.share.usersList = this.usersList;
      this._router.navigateByUrl('form/(form:result)');
    } else if (this.regForm.controls['regType'].value === 'list' && !(this.fileName)) {
      alert('Вы не выбрали файл со списком контактов');
    } else {
      this._router.navigateByUrl('form/(form:userEdit/0)');
      this.share.id = 0;
    }
  }
}
