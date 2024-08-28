console.log(typeof "boooob");

const arr = ["привет", 10, true];

console.log(arr[0]);
console.log(arr);

arr[0] = "пока";
arr[1] = 20;
arr[2] = false;
arr[100] = false;

console.log(arr);

arr.push("пока", "пока");
arr.unshift("пока", "пока");

console.log(arr);
arr.pop();
arr.pop();
arr.shift();
arr.shift();
console.log(arr);

console.log(arr.toString());

const arr2 = ["привет", 10, true];
console.log(arr2.join(", "));

const ar1 = new Array("battle of crecy", "battle of crecy");
console.log(ar1);
