"use strict";

function countTotalSalary(employees) {
  const keys = Object.keys(employees);
  let total = 0;
  for (let key of keys) {
    total += employees[key];
  }
  return total;
}

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);
