import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-message-error',
  standalone: true,
  imports: [NgIf],
  templateUrl: './field-message-error.component.html',
})
export class FieldMessageErrorComponent {
  @Input() item: AbstractControl | null = null;

  get minlength(): number | null {
    return this.item?.errors?.['minlength']?.requiredLength || null;
  }

  get actualLength(): number | null {
    return this.item?.errors?.['minlength']?.actualLength || null;
  }

  get hasRequiredError(): boolean {
    return this.item?.hasError('required') || false;
  }
}
