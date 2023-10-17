import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-import',
  templateUrl: './section-import.component.html',
  styleUrls: ['./section-import.component.scss'],
})
export class SectionImportComponent {
  @Input() import: string = '';
}
