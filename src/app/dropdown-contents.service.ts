import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownContentsService {
  getDropdownContents() {
    return [
      'Custom Dropdown test',
      'Second Dropdown option',
      'Third Dropdown option',
      'Another one',
      'But not less important',
      'The latest option in the dropdown'
    ];
  }
}
