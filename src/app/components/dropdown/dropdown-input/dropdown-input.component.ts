import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DropdownInputComponent {
  @Input() text?: string;
  @Input() open: boolean = false;
  @Output() toggle = new EventEmitter();
}
