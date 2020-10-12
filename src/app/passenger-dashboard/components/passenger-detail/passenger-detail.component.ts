import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css'],
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
      console.log('Emit Passenger edited', this.detail);
    }
    this.editing = !this.editing;
  }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }
  onRemove() {
    this.remove.emit(this.detail);
    console.log('Emit Passenger to Remove', this.detail);
  }
  goToPassenger() {
    // go to passenger dashboard
    this.view.emit(this.detail);
  }
}
