import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';
import {User} from '../user';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
