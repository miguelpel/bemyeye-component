import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.css']
})
export class NumericalPasswordInputComponent implements OnInit {
  @Input() userPassword: string;
  @Output() passwordMatch: EventEmitter<void> = new EventEmitter()

  currentPassword: string = "";

  constructor() { }

  ngOnInit() {
  }

  checkDigits(inputLength: number): boolean {
    if (inputLength === 9) return true;
    return false
  }

  checkPassword(currentPass: string): void {
    if (this.checkDigits(currentPass.length)) {
      if (currentPass.localeCompare(this.userPassword) === 0) {
        this.passwordMatch.emit();
      } else {
        this.currentPassword = "";
      }
    }
  }

  onPasswordChange(newPassword: string): void {
    this.currentPassword = newPassword;
    this.checkPassword(newPassword);
  }

}
