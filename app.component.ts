import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDrContent = false;

  showDrComponentContent() {
    this.showDrContent = true;
  }
  hideDrComponentContent() {
    this.showDrContent = false;
  }
}
