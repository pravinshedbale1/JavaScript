let arr = [10, "Pravin", true, 20.5];
console.log(arr); // [ 10, 'Pravin', true, 20.5 ]

//lenth of array
console.log(arr.length); // 4

// Some array methods : Operations

// 1. push() : Add element at the end of the array
arr.push("Pushed");
console.log(arr); // [ 10, 'Pravin', true, 20.5, 'Pushed' ]

// 2. pop() : Remove element from the end of the array
arr.pop();
console.log(arr); // [ 10, 'Pravin', true, 20.5 ]

// 3. unshift() : Add element at the beginning of the array
arr.unshift("Unshifted");
console.log(arr); // [ 'Unshifted', 10, 'Pravin', true, 20.5 ]

// 4. shift() : Remove element from the beginning of the array
arr.shift();
console.log(arr); // [ 10, 'Pravin', true, 20.5 ]

// 5. indexOf() : Find the index of the element in the array
console.log(arr.indexOf("Pravin")); // 1

// 6. splice() : Add or Remove element from the array
arr.splice(1, 0, "Inserted");
console.log(arr); // [ 10, 'Inserted', 'Pravin', true, 20.5 ]

arr.splice(1, 0, ...["Inserted1", "Inserted2"]);
console.log(arr); // [ 10, 'Inserted1', 'Inserted2', 'Inserted', 'Pravin', true, 20.5 ]

// 7. slice() : Copy the array
let newArr = arr.slice();
console.log(newArr); // [ 10, 'Inserted1', 'Inserted2', 'Inserted', 'Pravin', true, 20.5 ]

newArr = arr.slice(1, 4);
console.log(newArr); // [ 'Inserted1', 'Inserted2', 'Inserted' ]

// 8. includes() : Check if element is present in the array (ES6)
console.log(arr.includes("Pravin")); // true
console.log(arr.includes("Pravin1")); // false

// 9. forEach() : Iterate over the array
arr.forEach((element, index) => {
  console.log(index, element);
});

// 10. map() : Iterate over the array and return new array
let mappedArr = arr.map((element, index) => {
  return element + " - " + index;
});
console.log(mappedArr);

// 11. filter() : Filter the array based on condition
let filteredArr = arr.filter((element, index) => {
  return typeof element === "string";
});
console.log(filteredArr);

// 12. reduce() : Reduce the array to single value
let reducedArr = arr.reduce((accumulator, element, index) => {
  return accumulator + element;
});
console.log(reducedArr);
