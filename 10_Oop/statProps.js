class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  // To not give access of any  specific task donr by only class/ parent.
  static createId() {
    return `123`;
  }
}

const hitesh = new User('hitesh');
// console.log(hitesh.createId());    // Output -> 123

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher('iphone', 'i@phone.com');
console.log(iphone.createId());
