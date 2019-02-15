import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PadNumber } from '../../../models/PadNumber';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.css']
})
export class RandomizedNumericInputComponent implements OnInit {
  @Input() currentPassword: string;
  @Output() currentPasswordChange = new EventEmitter<string>()
  padNumbers: PadNumber[];

  constructor() { }

  ngOnInit() {
    let nbrElements = []
    for (let i = 0; i < 12; i++) {
      let nbr = {
        id: i,
        display: i < 10 ? String(i) : ""
      }
      nbrElements.push(nbr)
    }
    this.padNumbers = this.shuffle(nbrElements)
  }

  shuffle(a: Array<PadNumber>): Array<PadNumber> {
    let j: number, x: PadNumber, i: number;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  onClick(padNbr: PadNumber): void {
    if (padNbr.id < 10) {
      this.currentPassword = this.currentPassword + padNbr.id
      this.currentPasswordChange.emit(this.currentPassword);
    }
  }
}
