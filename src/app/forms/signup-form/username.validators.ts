import { AbstractControl, ValidationErrors } from '@angular/forms';

// Custom Validator
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      // check for spaces in the username
      return { cannotContainSpace: true };
    } else {
      return null;
    }
  }

  // Async Validator
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static customMinLength(control: AbstractControl): ValidationErrors | null {
    const minLength = 10;
    if ((control.value as string).length >= minLength) {
      // check for spaces in the username
      return { minLength: {
        requiredLength: 10,
        actualLength: control.value.length
      } };
    }
  }
}
