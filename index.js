//1.
const obj = {
  first: "Jane",
  last: "Doe"
};

const { first, last } = obj;
console.log(first, last); //Jane, Doe

//2. Destructure and rename
const { first: f, last: l } = obj;
console.log(f, l); //Jane, Doe

//3. Default value
const { foo = 3, bar } = {};
console.log(foo, bar); // 3, undefined
console.log("");

//4. Default value and rename
const { foo: x = 3, bar: y } = {};
console.log(x, y); //3, undefined

//5. Primitive values
const { length: len } = "abc";
console.log(len); // 3
const { toString: s } = 123; // s = Number.prototype.toString
console.log(s);

//6. computed property key
const FOO = "foo";
const { [FOO]: ff } = { foo: 123 };
console.log(ff); //123

//7. Array destructuring
const table = ["a", "b"];
const [x2, y2] = table;
console.log(x2, y2);

//8.
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(red, green, blue); //255, 200, 0

//9. Default
const [x3 = 3, y3] = [];
console.log(x3, y3); // 3, undefined

//10.
const rgb2 = [200];
const [red2 = 255, green2, blue2 = 255] = rgb2;
console.log(red2, green2, blue2); //200, undefined, 255
