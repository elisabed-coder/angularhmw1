import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnChanges {
  @Input() minor!: number;
  @Input() major!: number;
  displayVersion: string = '';
  changelog: string[] = [];
  initialVersionAdded: boolean = false;
  initialValue = 23;
  nextValue!: number;

  ngOnInit(): void {
    // Initialize displayVersion with the initial minor version
    this.displayVersion = this.minor.toString();
    // this.changelog.push('Initial value of minor set to ' + this.minor);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Update displayVersion based on the input changes
    if (changes['minor']) {
      this.displayVersion = this.minor.toString();
      if (this.initialVersionAdded) {
        const previousValue = this.initialValue;
        this.initialValue++;
        const changeString = `Minor version changed from ${previousValue} to ${this.initialValue}`;
        this.changelog.push(changeString);
      }
    } else {
      this.initialVersionAdded = true;
    }
    if (changes['major']) {
      this.displayVersion = this.major.toString();
      if (this.initialVersionAdded && this.major > 1) {
        const changeString = `Major version changed from ${changes['major'].previousValue} to ${this.major}`;
        this.changelog.push(changeString);
      } else {
        // this.changelog.push('Initial value of major set to ' + this.major);
        this.initialVersionAdded = true;
      }
    }
  }
}
