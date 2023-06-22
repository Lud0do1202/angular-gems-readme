import { Component } from '@angular/core';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss'],
})
export class RepositoryPageComponent {
  // Title
  title: string = 'Repository';
  description: string = "You'll found the github and npm repository";
}
