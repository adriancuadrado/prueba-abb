import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownInputComponent,
    DropdownListComponent
  ]
})
export class DropdownComponent {
  @Input() values: Array<string> = [];
  @Input() selectedIndex: number = 0;
  @Output() choose: EventEmitter<number> = new EventEmitter<number>();

  open: boolean = false;

  handleChoose(index: number) {
    this.open = false;
    this.choose.emit(index);
  }
}
