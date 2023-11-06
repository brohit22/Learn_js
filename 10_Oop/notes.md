# Javascript and Class

## OOP

## Object

- Collection properties and methods
- toLowerCase

## Why we use OOPS?

To strcture the spgattie code in good way

## Parts of OOPs

Object Literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars

- Abstarction
- Encapsulation
- Inheritance
- Polymorphism

</br>

## Getter - Setters

```javascript
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this.password.toUpperCase();
  }

  set password(value) {
    this.password = value;
  }
}

const Raj = new User('raj24@gmail.com', 'raj123');
console.log(Raj.password);
```

<u><b>RangeError</b></u>: Maximum call stack size exceeded.

Because constructor and getter setter both are defining value , so giving this value.

<u><b style="color:#FF6C22">Solution:</b></u>
Use ' \_ ' after
