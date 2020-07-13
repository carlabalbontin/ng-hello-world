import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static correctPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value !== '1234') {
        resolve({ correctPassword: true });
      } else {
        resolve(null);
      }
    });
  }

  static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value) {
      return { passwordsShouldMatch: true };
    } else {
      return null;
    }
  }

}
