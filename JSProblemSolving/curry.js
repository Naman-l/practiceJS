// Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).
// JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.



// Basic currying
// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
  
//   // usage
//   function sum(a, b) {
//     return a + b;
//   }
  
//   let curriedSum1 = curry(sum);
  
//   console.log( curriedSum1(1)(2) ); // 3


  //advanced curry

  function curry(func) {

    return function curried(...args) {
        console.log('args',args)
        console.log('func',func.length)

      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }

  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  // console.log( curriedSum(1, 2, 4) ); // 6, still callable normally
  // console.log( curriedSum(1)(2,4) ); // 6, currying of 1st arg
  // console.log( curriedSum(1)(2)(4) ); // 6, full currying
  console.log( curriedSum(1)(2)(3)); // 3, full currying

const sum1 = a => b => b ? sum1(a+b) : a;
const x =sum1(1)(3)(2)();
console.log(x,'x')