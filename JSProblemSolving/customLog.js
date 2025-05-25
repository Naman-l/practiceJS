
// Question: How could you set a prefix before everything you log?
// for example, if you log('my message') it will log: "(app) my message"

// Answer: Just get the arguments, convert it to an array and unshift whatever prefix you want to set.
// Finally, use apply to pass all the arguments to console.


function log(){
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console, args);
  }
  
  log('my message'); //(app) my message
  log('my message', 'your message'); //(app) my message your message 
          