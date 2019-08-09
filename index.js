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

//11.
const rgb3 = [200];
const [green3, red3 = 255, blue3 = 255] = rgb3;
console.log(green3, red3, blue3); //200, 255, 255

//12. Elision/Omit value
const [, , x4, y4] = ["a", "b", "c", "d"];
console.log(x4, y4); // c,d

//13. Refering to other variables
const [x5 = 3, y5 = x5] = [, 5];
console.log(x5, y5); // 3, 5
const [x6 = 3, y6 = x6] = [7];
console.log(x6, y6); // 7, 7
const [x7 = 3, y7 = x7] = [7, 2];
console.log(x7, y7); //7, 2;

//14. Nesting arrays destructuring
const numbers = [8, [1, 2, 3], 10, 12];
const [a, [d, e, f2]] = numbers;
console.log(a, d, e, f2); // 8,1,2,3

//15. Nesting object destructuring
const student = {
  name: "John Doe",
  age: 16,
  scores: {
    maths: 74,
    english: 63
  }
};
const {
  name,
  scores: { maths, science = 50 }
} = student;
console.log(name, maths, science); //"John Doe",74, 50

//16. Nesting complex values
const obj2 = {
  a: [
    {
      foo: 123,
      bar: "abc"
    },
    {}
  ],
  b: true
};

const {
  a: [{ foo: f3 }]
} = obj2;
console.log(f3); // 123

// 17. Nesting complex values other example
const person = {
  fullName: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207]
  }
};
//5 variables: name, country, city, lat, lon
const {
  fullName: nextName,
  location: {
    country,
    city,
    coordinates: [lat, lon]
  }
} = person;
console.log(nextName, country, city, lat, lon); // "John Doe","Canada","Vancouver",49.2827, -123.1207

//18. Advanced example
const [x8 = 1] = [];
console.log(x8); //1
const arr = [{ prop: 123 }];
const [{ prop }] = arr;
console.log(prop); //123
const [{ prop: x9 }] = arr;
console.log(x9);
const [{ prop: x10 } = defaultValue] = arr;
const [{ prop: x11 } = { prop: 123 }] = [];
console.log(prop, x9, x10, x11); // 123, 123, 123, 123
