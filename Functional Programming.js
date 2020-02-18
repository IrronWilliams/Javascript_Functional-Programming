/*
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the 
function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully 
controlled 
 */

/*Calling the getTea function to get x cups of tea for the team, and store them in the tea4TeamFCC variable.
The getTea() function takes in one variable - numOfCups. A teaCups[] array is first made and a for loop is set up to count the number 
of cups passed into the function. A new cup of tea is then pushed to the array through every iteration of the for loop.

Thus resulting in an array full of the amount of teacups originally passed into the getTea() function.
 */
let prepareTea = () => 'greenTea'

let getTea = (numOfCups) => {
  let teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    let teaCup = prepareTea() //creating a variable called teaCup which calls the prepareTea() function; where function is a string variable 
    teaCups.push(teaCup) //pushing the variable teaCup to the teaCups array
  }

  return teaCups
}
let tea4TeamFCC = getTea(4)
console.log(tea4TeamFCC)

/*
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 
For example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other 
normal value, are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or 
returned can be called a lambda.
 */

/*
 * @return {string} A cup of green tea.
   @return {string} A cup of black tea.
 */
let prepareGreenTea = () => 'greenTea'
let prepareBlackTea = () => 'blackTea'
/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
let getTea2 = (prepareTea, numOfCups) => {//takes 2 parameters. 1st is a function prepareTea(), 2nd is numOfCup.
  let teaCups = []

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    let teaCup = prepareTea()
    teaCups.push(teaCup)
  }

  return teaCups
}
/*passing in the functions prepareGreenTea() and prepareBlackTea() as parameters or callback functions for the getTea() function
being assigned to the two variables tea4BlackTeamFC and tea4GreenTeamFCC.*/
let tea4GreenTeamFCC = getTea2(prepareGreenTea, 2) 
let tea4BlackTeamFCC = getTea2(prepareBlackTea, 3) 

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

/*
Using object-oriented code to model browsing the web in your browser and tracking the tabs you have opened. 

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is 
held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are 
still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is 
part of the Window object that stores the name of the open pages.
*/

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs // keep a record of the array inside the object
  }
  
  // Join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
  }
  
  // Open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab') // let's open a new tab for now
    return this
  }

  // Close a tab
  Window.prototype.tabClose = function (index) {
  
    var tabsBeforeIndex = this.tabs.slice(0, index) // get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index + 1) // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // join them together
  
    // Only change code above this line
  
    return this
   }
  
  //Creates three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']) // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']) //  Entertainment sites
  
  //Performs the tab opening, closing, and other operations
  var finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen())
  console.log(finalTabs.tabs)
  //finalTabs.tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']