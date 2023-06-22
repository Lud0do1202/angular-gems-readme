import { Component } from '@angular/core';

@Component({
  selector: 'app-donnation-page',
  templateUrl: './donnation-page.component.html',
  styleUrls: ['./donnation-page.component.scss'],
})
export class DonnationPageComponent {
  // Title
  title: string = 'Donnation';
  description: string = `
    I still live with my parents, have no car and no job. In short, I'm a student.
    Therefore I'm pursuing my quest for wealth to get all the benefits that brings.
    So I humbly ask you, could you help me to fly on my own... please ?
  `;
}
