import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES, REGEXP } from "../../../../assets/helpers/ERROR_MESSAGES";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  sign_up_form = new FormGroup({
    firstname: new FormControl('',
      [Validators.required
      ]),
    email: new FormControl('',
      [Validators.required,
      Validators.pattern(REGEXP.email)
      ]),
    password: new FormControl('',
      [Validators.required,
      Validators.pattern(REGEXP.passMaxMinCharacters),
      Validators.pattern(REGEXP.passLowercaseLetter),
      Validators.pattern(REGEXP.passUpercaseLetter),
      Validators.pattern(REGEXP.passNumber),
      Validators.pattern(REGEXP.passSymbol),
      ]),
  });

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
   console.log(this.sign_up_form.value);
   
  }
  constructor() { }

}
