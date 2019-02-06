import { Component, OnInit } from '@angular/core';
import {GitService } from '../gits/git.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitService]
})
export class ProfileComponent implements OnInit {
  user: User;
  
 constructor(private gitService: GitService, public repositoryService: GitService) { 
 this.user = this.gitService.user;
 }
  ngOnInit() {
    this.user = this.gitService.user;

  }

}
