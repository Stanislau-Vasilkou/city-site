import { Component, OnInit } from '@angular/core';
import {User} from './data/user';
import {Router, RouterModule} from '@angular/router';
import {ShareService} from '../services/share.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usersList: User[];
  id: number;


  constructor(private router: RouterModule,
              private _router: Router,
              private share: ShareService) {
  }

  ngOnInit() {
    this.id = this.share.id;
  }

  goTab(url: string) {
    console.log(this.router);
    this._router.navigateByUrl(url);
  }
}
