// Ternary Operator
// condition ? true : false
// condition ? true : condition2 ? true : condition3 ? true : condition4 ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;
type someValue = someType<number>; //number
type someValue2 = someType<string>; //string;
type someValue3 = someType<boolean>; //boolean

type MyExclude<T, U> = T extends U ? never : T;
//never: never occurs
type TExclude = Exclude<"a" | "b" | "c", "a">; //type T0 = "b" | "c"
//union type: T 'a' | 'b' 'c'
//U 'a'
// "a" extends "a" ? never : "a" => never
// "b" extends "a" ? never : "b" => b
// "c" extends "a" ? never : "c" => c

//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MyInfer<T> = T extends infer R ? R : any;
type UseMyInfer = MyInfer<string>;
type UseMyInfer2 = MyInfer<boolean>;
type UseMyInfer23 = MyInfer<{
  age: number;
}>;

type OptionsFlags2<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];
interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
}
type MyStudentConditional = OptionsFlags2<MyStudent>;
