import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOptionComponent } from '../dropdown-option/dropdown-option.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownOptionComponent
  ]
})
export class DropdownListComponent {
  @Input() values: Array<string> = [];
  @Input() selectedIndex: number = 0;
  @Output() choose = new EventEmitter<number>();

  setSelectedIndex(index: number) {
    this.choose.emit(index);
  }
}
