function convertToRoman(num) {
    let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let str = '';

    console.log(Object.keys(roman))
    Object.keys(roman).forEach((e,i)=>{
        let q = Math.floor(num / roman[e]);
        num -= q * roman[e];
        str += e.repeat(q);
    })
  
    return str;
  }

console.log(convertToRoman(15))