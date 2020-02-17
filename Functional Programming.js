/**
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the 
function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully 
controlled 
 **/

/*Calling the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
The getTea() function takes in one variable - numOfCups. A teaCups[] array is first made and a for loop is set up to count down the number 
of cups passed into the function. A new cup of tea is then pushed to the array through every iteration of the for loop.

Thus resulting in an array full of the amount of teacups originally passed into the getTea() function.
 */
let prepareTea = () => 'greenTea'

let getTea = (numOfCups) => {
  let teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    let teaCup = prepareTea()
    teaCups.push(teaCup)
  }

  return teaCups
}
let tea4TeamFCC = getTea(5)
console.log(tea4TeamFCC)