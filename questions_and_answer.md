<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<h1>Ans: A & B both</h1>
<p>this code will create an empty object and assign it to the greeting variable. Then, it will log the contents of the greeting variable, which will result in an output of an empty object {} being displayed in the console || . JavaScript is case-sensitive, so greetign and greeting are treated as two different variables. Therefore, greetign is not defined, and attempting to log it will result in a ReferenceError</p>

#### Answer: A and B both ;


###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>12</b></summary>
<p>

#### Answer: C ;

<i>
sum function two parameter given a and b, using the + operator. a is number type value and b is string type value so a and b addition value is 12 ; 
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>`['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: A ?

<i>food is array , this array have 4 element , info is object with a fav property initially set to the first element of the food array, which is 🍕 , update the info.fav property to 🍝 , info object property does not affect the original food array. So, when you log the food array, it remains unchanged 
 </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Hi there, undefined</b></summary>
<p>

#### Answer: B ;

<i>sayHi is a  function give a 'name' parameter, which you can use to build the greeting message. However, when you call sayHi() without passing any argument, the name parameter inside the function becomes undefined.
So, the function attempts to concatenate undefined with the greeting string, resulting in 'Hi there, undefined'</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>3</b></summary>
<p>

#### Answer: C ;

<i>
 nums is an array . this array in 4 length . this array used in forEach method to iterate through each element of the array.
array fast element is 0 so counting value is falsy .and 1, 2, 3 it is considered truthy so increment count variable by 1 .
so false is count value is unchanged and true is count value increment by 1 for each of these value.
</i>

</p>
</details>
