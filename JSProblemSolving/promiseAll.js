// The Promise.all() method takes an iterable of promises as an input,
//  and returns a single Promise that resolves to an array of the results of the input promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1");
  }, 300);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2");
  }, 300);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, 300);
});

const promises = [promise1, promise2, promise3];

// Promise.all(promises).then((result) => console.log(result)).catch((err) => console.log(err));

Promise.runAll = function (iterable) {
    return new Promise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        throw new TypeError(`${typeof iterable} ${iterable} is not iterable`);
      }
  
      const promises = Array.from(iterable);
      if (promises.length === 0) {
        resolve([]);
        return;
      }
  
      let result = new Array(promises.length);
      let totalPromisesResolved = 0;
      let rejected = false;
  
      promises.forEach((item, index) => {
        Promise.resolve(item)
          .then((val) => {
            if (rejected) return;
            result[index] = val;
            totalPromisesResolved++;
            if (totalPromisesResolved === promises.length) resolve(result);
          })
          .catch((err) => {
            if (!rejected) {
              rejected = true;
              reject(err);
            }
          });
      });
    });
  };

Promise.runAll(promises)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
