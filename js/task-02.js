"use strict";

function countProps(obj) {
  let keys = Object.keys(obj);
  return keys.length;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
