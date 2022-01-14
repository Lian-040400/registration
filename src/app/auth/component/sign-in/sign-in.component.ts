import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/assets/helpers/ERROR_MESSAGES';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true;
  sign_up_form = new FormGroup({

    email: new FormControl('',
      [Validators.required,

      ]),
    password: new FormControl('',
      [Validators.required,
      ]),
  });

  constructor() { }
  getControlError(control: any) {
    if (!control.touched) {
      return ''
    }
    for (const [key, value] of Object.entries(control.errors || {})) {
      return ERROR_MESSAGES[key](value);
    }
    return '';
  }
  onSubmit() {
    console.log("hello");

  }


}
