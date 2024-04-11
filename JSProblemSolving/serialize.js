//how to serialize object with non-native data type

//the key here is using JSON.stringify's replacer function
//The replacer parameter can be either a function or an array.
//for big numbers convert them to string and then deserialize



let obj = {
    say:function(){
        console.log('wow')
    }
}

let json = JSON.stringify(obj,function(key,value){
    if(typeof value==="function"){
        return value.toString()
    }
    else{
        return value
    }
})
// console.log(json)
// console.log(JSON.parse(json))

//handle cycylic json

const circularReference = { otherData: 123 };
circularReference.myself = circularReference;

//find and replace (or removing) the cyclic references by serializable values.

function getCircularReplacer(){
    const ancestors=[]
    return function (key,value){
        if (typeof value !== "object" || value === null) {
            return value;
          }
        // `this` is the object that value is contained in,
        // i.e., its direct parent.
        while (ancestors.length > 0 && ancestors.at(-1) !== this) {
            ancestors.pop();
        }
        if (ancestors.includes(value)) {
            return "[Circular]";
        }
        ancestors.push(value);
        return value;
    }
}

console.log(JSON.stringify(circularReference, getCircularReplacer()));


// JSON.stringify(circularReference);


