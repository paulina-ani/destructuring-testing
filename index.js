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
console.log(ff);
