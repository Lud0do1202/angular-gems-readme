import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-html-typescript',
  templateUrl: './select-html-typescript.component.html',
  styleUrls: ['./select-html-typescript.component.scss'],
})
export class SelectHtmlTypescriptComponent {
  @Output() onChange = new EventEmitter<string>();

  // Select Button options
  options: { label: string; value: string }[] = [
    { label: 'HTML', value: 'html' },
    { label: 'Typescript', value: 'ts' },
  ];

  value: string = 'html';
}
