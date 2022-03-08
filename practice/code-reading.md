# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Because in line 4 ,we define a variable x inside the scope and console.log shows the value that we assign to x in that scope,
but in line 7 conole.log shows the value of variable
that we assign in the main block

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
console.log(f1()) shows 10 as we assign 1- to x(global variable)
console.log(y) shows undefined as we declare y in the code block and is not accessible outside of that code block

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

console.log(x) shows 9 as the function return 10 but we didn't assign the calling function into the variable and x keeps it's initial value
but the console.log(y)shows 10 because objects(or array) are passed as references so the function modifies the original.
