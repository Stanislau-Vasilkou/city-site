import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../../services/share.service';
import {User} from '../../data/user';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  uniqueUser: User;

  constructor(private share: ShareService) {
    this.uniqueUser = this.share.uniqueUser;
  }

  ngOnInit() { }
}
