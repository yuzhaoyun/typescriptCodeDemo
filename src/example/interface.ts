// const getFullName = ({firstName, lastName}) => {
//   return `${firstName} ${lastName}`;
// }

interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({firstName, lastName}: NameInfo) => {
  return `${firstName} ${lastName}`;
}

console.log(getFullName({
  firstName: 'hahahaha',
  lastName: 'Li'
}))


interface VegeTable {
  readonly color: string, // 表示该属性为只读的属性
  type?: string, // 加问号表示可选属性
  [prop: string]: any // 索引签名  表示可以任意多的参数
}
const getVegetables = ({color, type}: VegeTable) => {
  return `A ${color ? (color + ' ') : ' '} ${type}`;
}

console.log(getVegetables({
  color: '红色',
  type: '西瓜',
}))


// 多余属性检查
console.log(getVegetables({
  type: '香蕉',
  color: '黄色',
  size: 2
}))

let vegetableObj: VegeTable = {
  type: '马铃薯',
  color: '黄色',
}
// vegetableObj.color = '彩色'; // 会报错

interface ArrInter {
  0: number,
  readonly 1: string,
}
let testArr: ArrInter = [1, 'test'];
// testArr[1] = 'test'; // 会报错
// console.log(testArr);

// 定义一个接口函数
// interface AddFun {
//   (num1: number, num2: number) : number
// }
type AddFun = (num1: number, num2: number) => number;

const ad: AddFun = (n1, n2) => n1 + n2;

// 索引属性
interface IRoleDic {
  [id: number]: string
}
const role1: IRoleDic = {
  0: 'super_admin',
  '1': 'add', // '1'会被转换成 1,
  // 'a': 'dsf', // 会报错
}
console.log(role1);

interface IoDic {
  [id: string]: string
}

const role2: IoDic = {
  1: "test", // js中以数字为属性名, js会将其转换为字符串
  'a': 'super_admin'
}
console.log(role2);

// 接口的继承
interface IVegetables {
  color: string,
}
interface ITomato extends IVegetables {
  radius: number,
}
interface ICarrot extends IVegetables {
  length: number,
}

const tomato: ITomato = {
  radius: 10,
  color:　'yellow',
}
const carrot: ICarrot = {
  color:　'yellow',
  length: 10,
}
console.log(tomato);
console.log(carrot);

// 混合类型接口
interface ICounter {
  (): void,
  count: number,
}
const getCounter = (): ICounter => {
  const c = () => {
    c.count++;
  }
  c.count = 0;
  return c;
}

const counter: ICounter = getCounter();
counter();
console.log(console.log(counter.count));