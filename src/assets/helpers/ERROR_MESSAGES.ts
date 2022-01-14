export const REGEXP = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    passUpercaseLetter: /^(?=.*[A-Z]).*$/,
    passLowercaseLetter: /^(?=.*[a-z]).*$/,
    passSymbol: /^(?=.*[!@#$%^&*_=+-]).*$/,
    passNumber: /^(?=.*[0-9]).*$/,
    passMaxMinCharacters: /.{6,10}$/,
}
export const ERROR_MESSAGES: any = {
    pattern: (pattern: any) => {
      if (pattern.requiredPattern == REGEXP.email) {
        return 'invaid email';
      }
      if (pattern.requiredPattern == REGEXP.passUpercaseLetter) {
        return 'field must contain uppercase letters';
      }
      if (pattern.requiredPattern == REGEXP.passNumber) {
        return 'the field must contain numbers';
      }
      if (pattern.requiredPattern == REGEXP.passSymbol) {
        return 'the field must contain symbols';
      }
      if (pattern.requiredPattern == REGEXP.passLowercaseLetter) {
        return 'the field must be include lowercase letters';
      }
      if (pattern.requiredPattern == REGEXP.passMaxMinCharacters) {
        return `the field should be maximum of ${REGEXP.passMaxMinCharacters.toString().slice(3,4)} and minimum of ${REGEXP.passMaxMinCharacters.toString().slice(5,7)} characters`;
      }
      return "";
    },
    required: () => 'the field are required',
  }