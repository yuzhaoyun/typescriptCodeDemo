// 布尔类型
let bool:boolean = false;

bool = true;
// bool = 123; // 会报错

// 数值类型
let num:number = 123;

num = 0b1111;

num = 0o173;

num = 0x7b;

// string 类型
let str:string ;
str = '123';

str = `数值是:${num}`;
// console.log(str);

// 数组类型
// [1,2,3]
// 写法1
let arr: number[];
arr = [1,2,3,4,5];
// 写法2
let arr2:Array<number>; // 数组元素只能是数字;
let arr3:(string|number)[]; // 数组中既可以是数字也可以是字符串

// 元组类型
let tuple:[string, number, boolean];
tuple = ['1', 1, false]; // 一一对应, 不能多也不能少

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN = 4,
  USER
}

// console.log(Roles);

// any 类型  (能不用的时候就尽量不要用)
let value:any;
value = 'abc';
value = 1;
const arr4:any[] = [1, 'a'];

// void 类型
const consoleText = (text:string):void => {
  console.log(text);
}
consoleText('123');

// null 和 undefined (是上述其他类型的子类型)
let u:undefined;
u = undefined;
let n = null;
n = null;

// never 类型 (任意类型的子类型, 没有任何类型是 never 的子类型)
const errorFunc = (message:string):never => {
  throw new Error(message);
}
// errorFunc('abc');
const infiniteFunc = ():never => {
  while(true){}
}

// let neverVariable = (() => {
//   while(true){}
// })();

// Object
let obj = {
  name: 'lison',
}

let obj2 = obj;
obj2.name = 'L';
console.log(obj);

const getObject = (obj: object):void => {
  console.log(obj);
}

getObject({name: 1});

// 类型断言
const getlength = (target:string | number) => {
  // 两种写法都是可以的
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length;
  } else {
    return target.toString().length;
  }
}

console.log(getlength('122567'));