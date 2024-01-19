import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownContentsService } from '../../services/dropdown-contents.service';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css'],
  standalone: true,
  imports: [DropdownComponent]
})
export class LeftPaneComponent {
  dropdownValues: Array<string> = [];
  selectedIndex: number = 0;

  constructor(private readonly dcs: DropdownContentsService) {
    this.dropdownValues = this.dcs.getDropdownContents();
  }

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
}
