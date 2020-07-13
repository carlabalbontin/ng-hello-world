import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-assignment-change-password',
  templateUrl: './assignment-change-password.component.html',
  styleUrls: ['./assignment-change-password.component.scss']
})
export class AssignmentChangePasswordComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.correctPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  changePassword() {
    // if (this.confirmPassword.value !== this.newPassword.value) {
    //   this.form.setErrors({
    //     passwordDoesntMatch: true
    //   });
    // } else {
    //   console.log('SUCCESS');
    // }
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


}
