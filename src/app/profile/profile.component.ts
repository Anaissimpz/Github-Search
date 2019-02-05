import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';
import {User} from '../user';
import{Repository} from '../repository';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
