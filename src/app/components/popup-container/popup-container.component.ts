import { Component } from '@angular/core';
import { LeftPaneComponent } from '../left-pane/left-pane.component';
import { SeparatorComponent } from '../separator/separator.component';
import { RightPaneComponent } from '../right-pane/right-pane.component';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.css'],
  standalone: true,
  imports: [
    LeftPaneComponent,
    SeparatorComponent,
    RightPaneComponent
  ]
})
export class PopupContainerComponent { }
