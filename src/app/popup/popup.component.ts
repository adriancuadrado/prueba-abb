import { Component } from '@angular/core';
import { PopupContainerComponent } from '../popup-container/popup-container.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true,
  imports: [PopupContainerComponent]
})
export class PopupComponent { }
