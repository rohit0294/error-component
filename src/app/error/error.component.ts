import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnChanges {
  @Input() controlName: string;
  @Input() errors: any;

  errorText: string = '';

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (prop === 'errors') {
        this.errors = changes.errors.currentValue;
        this.buildErrorText();
      }
    }
  }

  buildErrorText() {
    this.errorText = '';
    if (this.errors) {
      for (let item in this.errors) {
        if (item == "required") {
          this.errorText = this.controlName + " is required.";
        } else if (item == "minlength") {
          this.errorText = "Minimum required length for '" + this.controlName + "' is " + this.errors.minlength.requiredLength + ". Current length is " + this.errors.minlength.actualLength;
        } else if (item == "maxlength") {
          this.errorText = "Maximum allowed length for '" + this.controlName + "' is " + this.errors.maxlength.requiredLength + ". Current length is " + this.errors.maxlength.actualLength;
        }
      }
    }
  }
}