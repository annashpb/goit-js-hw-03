"use strict";

function getAllPropValues(arr, prop) {
  const properties = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Object.keys(arr[i]).includes(prop)) {
      properties.push(arr[i][prop]);
    }
  }
  return properties;
}

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 }
  ];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));