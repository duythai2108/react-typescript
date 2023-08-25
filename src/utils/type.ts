// -------------------/
// Cac kieu du lieu khac
//* Tuple
/**
 * 
  string[] => ['evondev','react','javascipt'] -> string array
  [number,string] -> [12345,'evondev'] -> Tuple
 * 
 */

// *Enum
/*
 -APPROVED
 -PENDING
 -REJECTED

*/

// *Any (not good)
/**
 * const reviews: any[] = [{}]
  {
 * 
 * 
 */
// *Union
/**
 *  union type : string | number
  date: string | number;
 */
// *Literal
/**
 * type Age = 18 | 30 | 40
 *
 */
// *Function
// *Void
/**
 * export function total(a: number, b: number): void {
   a + b;
}
 */

//* unknow
// let aNumber: unknown;
// aNumber = 100;
// if (typeof aNumber === "number") {
//   aNumber.toFixed(2);
// }
//* never
// contains no values
// represent return type of a function throw error
// function raiseError(err: string): never {
//   throw new Error(err);
// }
// function reject() {
//   return raiseError("error");
// }
// const loop = function forever() {
//   while (true) {
//     console.log("Hello world");
//   }
// };

//*            ---------------------------
// Intersection type & type =A & typeB
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
type Other = IContact | IIdentity;
const evondev: Employee = {
  id: 1,
  name: "evonde",
  email: "asdas@gmail.com",
  phone: "0234234",
};
const tuan: Customer = {
  name: "Yusn",
  credit: 1,
  email: "adas@gmail.com",
  phone: "35404695",
};
const other: Other = {
  email: "asdasz2gmail.com",
  phone: "0w378484",
};
// Type casting as ep kieu
  

// Type assertion as
