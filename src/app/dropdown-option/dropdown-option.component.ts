import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-option',
  templateUrl: './dropdown-option.component.html',
  styleUrls: ['./dropdown-option.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DropdownOptionComponent {
  @Input() value?: string;
  @Input() selected: boolean = false;
  @Output() choose = new EventEmitter();
}
