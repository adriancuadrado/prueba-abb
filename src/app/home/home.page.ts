import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  standalone: true,
  imports: [
    BackgroundComponent,
    PopupComponent
  ]
})
export class HomePage { }
