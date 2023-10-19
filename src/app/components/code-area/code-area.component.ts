import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.scss'],
})
export class CodeAreaComponent {
  @Input() code: string = '';
  @Input() canCopy: boolean = true;

  constructor(private clipboardService: ClipboardService) {}

  clipboard(): void {
    this.clipboardService.copy(this.code);
  }
}
