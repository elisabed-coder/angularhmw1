import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'commschoolhmw';
  // majorVersionString: string = '1.0';
  majorVersion = 1.0;
  // minorVersionString: string = '1.0';
  minorVersion = 1.0;

  increaseMinorVersion() {
    this.minorVersion += 0.1;
    this.minorVersion = parseFloat(this.minorVersion.toFixed(1));
    console.log(this.minorVersion);
  }

  increaseMajorVersion() {
    this.majorVersion++;
    this.minorVersion = 1;
    console.log(this.majorVersion);
  }
}
