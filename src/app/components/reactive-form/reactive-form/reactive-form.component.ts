import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldMessageErrorComponent } from '../../field-message-error/field-message-error.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FieldMessageErrorComponent],
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  formBuilder = inject(FormBuilder);
  userForm!: FormGroup;

  constructor() {
    this.createForm();
  }

  getItem(itemName: string) {
    return this.userForm.get(itemName);
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(8)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.userForm.markAsDirty();
      return;
    }

    console.log('Form submitted successfully', this.userForm.value);
  }
}
