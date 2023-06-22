import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.scss'],
})
export class CodeAreaComponent {
  @ViewChild('toCopy') toCopy!: ElementRef<HTMLParagraphElement>;

  constructor(private clipboardService: ClipboardService) {}

  clipboard(): void {
    const content = this.toCopy.nativeElement.innerText ?? '';
    this.clipboardService.copy(content);
  }
}
