import { Component } from '@angular/core';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.scss'],
})
export class DonationPageComponent {
  // Title
  title: string = 'Donation';
  description: string = `
    I still live with my parents, have no car and no job. In short, I'm a student.
    Therefore I'm pursuing my quest for wealth to get all the benefits that brings.
    So I humbly ask you, could you help me to fly on my own... please ?
  `;
}
