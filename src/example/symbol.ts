// const s = Symbol();
// console.log(s);

let prop = 'name';
const info = {
  [prop]: 'lison', // 相当于 name: 'lison'
}
console.log(info);

const s5 = Symbol('name');
const info2 = {
  [s5]: 'lison',
  age: 20,
}
console.log(info2);
console.log(Object.keys(info2)); // 拿不到symbol的属性名
console.log(Object.getOwnPropertyNames(info2)); // 拿不到symbol的属性名
console.log(JSON.stringify(info2)); // 拿不到symbol的属性名

console.log(Object.getOwnPropertySymbols(info2)); // 可以拿到symbol的属性名
console.log(Reflect.ownKeys(info2)); // 可以拿到symbol的属性名和不是symbol的属性名

// Symbol.for() Symbol.keyFor();

const s6 = Symbol.for('lison');
// const s7 = Symbol.for('lison');
// console.log('s6 === s7', s6 === s7) // 浏览器运行为 true

console.log(Symbol.keyFor(s6)) // Symbol.keyFor() 只能用于 Symbol.for() 创建的


// instanceof
const obj1 = {
  [Symbol.hasInstance](otherObj) {
    console.log(otherObj)
  }
}

console.log({a: 'a'} instanceof <any>obj1);

// let arr = [1, 2];
// console.log([].concat(arr, [3, 4])); // 输出 [1, 2, 3, 4]
// arr[Symbol.isConcatSpreadable] = false;
// console.log([].concat(arr, [3, 4])); // 输出 [[1, 2], 3, 4]

// class C extends Array {
//   getName () {
//     return 'lison'
//   }
// }
// const c = new C(1, 2, 3); //浏览器运行
// const a = c.map(item => {
//   return item;
// })