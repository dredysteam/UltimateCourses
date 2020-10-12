import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const COUNTER_CONTROL_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true,
};

@Component({
  selector: 'app-stock-counter',
  providers: [COUNTER_CONTROL_ACCESOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.css'],
})
export class StockCounterComponent implements ControlValueAccessor {
  onTouch: Function;
  onModelChange: Function;
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
    // console.log(value);
    this.value = value || 0;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 100;

  value: number = 10;
  focus: boolean;
  constructor() {}

  // ngOnInit(): void {}
  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowUp: () => this.increment(),
      ArrowDown: () => this.decrement(),
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }
  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch(); // for validation purposes
  }
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value); // modifica el form
    }
    this.onTouch(); // for validation purposes
  }
}
