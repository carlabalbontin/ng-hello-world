import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
