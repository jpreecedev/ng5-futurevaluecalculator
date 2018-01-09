import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html'
})
export class TextFieldComponent {

  @Input() id: string;
  @Input() prefix: string;
  @Input() inputValue: string;
  @Input() suffix: string;
  @Input() type: string;
  @Input() label: string;

  @Output() changed = new EventEmitter();

  onInput(value: string) {
    this.changed.emit(value);
  }

}
