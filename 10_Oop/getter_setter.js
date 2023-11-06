class User {
  constructor(email, password) {
    // console.log(this);   // Output - User {}
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}gojo`;
  }

  set password(value) {
    // console.log(this);     // Output - User { _email: 'raj24@gmail.com' }
    this._password = value;
  }

  set email(value) {
    this._email = value;
  }

  get email() {
    return this._email.toUpperCase();
  }
}

const Raj = new User('raj24@gmail.com', 'raj123');
console.log(Raj.password, Raj.email);
