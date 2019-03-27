import {Component, Input, OnInit} from '@angular/core';
import {User} from '../data/user';
import {ShareService} from '../../services/share.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  show: Boolean = false;
  usersList: User[];
  uniqueUser: User;


  @Input() input: string;

  constructor(private share: ShareService,
              private _router: Router,
              private router: ActivatedRoute) {
    this.usersList = this.share.usersList;
    this.uniqueUser = this.share.uniqueUser;
  }

  ngOnInit() {
  }

  setId(id: number) {
    this.share.setId(id);
  }

  goTab(url: string, id: number) {
    this._router.navigateByUrl(`${url}/${id})`);
  }
}
