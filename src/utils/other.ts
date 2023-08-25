// in, check if var exist in obj or not
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}
// typeOf
// keyOf
const myStudent = {
  id: 1,
  name: "thai",
  age: 28,
};
type Student = keyof typeof myStudent;
//name | age | student
