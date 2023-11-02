/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its   resulting value.

* A Promise is in one of these states:
 ? pending: initial state, neither fulfilled nor rejected.
 ? fulfilled: meaning that the operation was completed successfully.
 ? rejected: meaning that the operation failed.
*/

const promiseOne = new Promise(function (resolve, reject) {
  // DB an async task
  //DB calls, cryptogaphy, network

  setTimeout(function () {
    console.log(`Async tasks are done`);
    resolve(); //  --> Connects .then and should excute  only  after all async task done
  }, 1000);
});

promiseOne.then(function () {
  console.log(`Promise resolved`);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 2`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Async resolved`);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 3 `);
    resolve({ username: 'Me24', location: 'Mumbai' });
  });
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: 'goku', friend: 'Vegeta' });
    } else {
      reject(`Error : OOps something happend`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    name;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log(`The promise either resolved or rejected `));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'javascript', password: '123' });
    } else {
      reject('ERROR: JS went wrong');
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

// The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
// The promise resolves to the Response object representing the response to your request.
