import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactice-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule ],
  templateUrl: './reactice-form.component.html',
  styleUrl: './reactice-form.component.css'
})
export class ReacticeFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
  this.userForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required,
  Validators.minLength(6)]],
});
}
onSubmit() {
  if (this.userForm.valid) {
    alert('Form submitted successfully!');
    console.log(this.userForm.value);
} else {
alert('Form is invalid!');
}
}
}
