import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  user = {
    user : ""
  }

onKey(event: any) { // without type info
  this.user += event.target.value;
}
  submitSearch() {
    this.gitService.getProfileInfo(this.user.user);
    this.repositoryService.getRepoInfo(this.user.user);
  }
   constructor(private gitService: GitService, private repositoryService: GitService) { }
  ngOnInit() {
  }
 }
