const User = {
  _email: 'gojo@4.com',
  _password: 'sukuna',

  get email() {
    return this._email.toLocaleUpperCase;
  },

  set email(value) {
    this._email = value;
  },
};
const tea = Object.create(User);
console.log(tea.email);
