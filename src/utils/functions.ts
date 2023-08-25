// function total(a: number, b: number) {
//   return a + b;
// }
// function total(a: string, b: string) {
//   return a + b;
// }
// console.log(5, 7);
// console.log("NDT", "coming");

// * function overloading: function have the same name, same amount of parameter or different amount, different types and same of different return types
// function total(a: number, b: number): number;
// function total(a: string, b: string): string;
// function total(a: any, b: any) {
//   return a + b;
// }
// total(5, 7); //12
// total("a", "b"); //ab

// * more examole
interface Coordinate {
  x: number;
  y: number;
}
// {x:number;y:number}:Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
// x:10, y:20
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
// type assertion `as`
// parseCoordinateFromObject({ x: 10, y: 20 });
// parseCoordinateFromNumber(10, 20);

// *********************
// Normal function
function addNumber(a: number, b: number): number {
  return a + b;
}
// Arrow function
const addStrings = (x: string, y: string): string => {
  return `${x} ${y};`;
};
// Default parameter
function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
  return a + b;
}
addNumbersWithDefaultParams(); //30
// Union type
function format(title: string, description: string, amount: string | number) {
  return `${title} ${description} ${amount}`;
}
format("evondev", "developer", 50);
// Void function
function contact(email: string, phone: number): void {
  console.log(email, phone);
}
// Promise function
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
// Rest parameter
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
information(1, "tuan", "thai"); //["tuan", "thai"]

// with callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
// FUnction params with params
//Function as types
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); //5 10 15 20 25
// Function return function
function handleValue(val: number): (n: number) => number {
  return (n: number): number => n * val;
}
const value = handleValue(5);
console.log(value(10)); //50
