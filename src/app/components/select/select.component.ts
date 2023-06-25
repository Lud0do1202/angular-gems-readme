import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  // On change value
  @Output() onChange = new EventEmitter<number>();

  // Labels
  @Input() labels: string[] = [];

  // Default
  @Input() default: number = 0;

  // Value
  value!: number;

  // Options
  options!: { label: string; value: number }[];

  /* ******************************************* */
  ngOnInit(): void {
    // Default
    this.value = this.default;

    // Options
    this.options = this.labels.map((label, index) => ({ label, value: index }));
  }
}
