/*
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the 
function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global letiables that are subject to change

2) Pure functions - the same input always gives the same output.

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully 
controlled.

Two distinct principles for functional programming:

1) Don't alter a letiable or object - create new letiables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or letiable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.
 */

/*Calling the getTea function to get x cups of tea for the team, and store them in the tea4TeamFCC letiable.
The getTea() function takes in one letiable - numOfCups. A teaCups[] array is first made and a for loop is set up to count the number 
of cups passed into the function. A new cup of tea is then pushed to the array through every iteration of the for loop.

Thus resulting in an array full of the amount of teacups originally passed into the getTea() function.
 */
let prepareTea = () => 'greenTea'

let getTea = (numOfCups) => {
  let teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    let teaCup = prepareTea() //creating a letiable called teaCup which calls the prepareTea() function; where function is a string letiable 
    teaCups.push(teaCup) //pushing the letiable teaCup to the teaCups array
  }

  return teaCups
}
let tea4TeamFCC = getTea(4)
console.log(tea4TeamFCC)

/*
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 
For example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a letiable, passed into another function, or returned from another function just like any other 
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
being assigned to the two letiables tea4BlackTeamFC and tea4GreenTeamFCC.*/
let tea4GreenTeamFCC = getTea2(prepareGreenTea, 2) 
let tea4BlackTeamFCC = getTea2(prepareBlackTea, 3) 

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

/*
Using object-oriented code to model browsing the web in your browser and tracking the tabs user has opened. 

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is 
held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are 
still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is 
part of the Window object that stores the name of the open pages.

This is an example of how mutation can cause unexpected results. If the splice method was used in the tabClose() function, 
splice will change the original array it is called on, and the second call to it will use a modified array, and gave unexpected results.
*/

// tabs is an array of titles of each site open within the window
let Window = function(tabs) {
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
  
    let tabsBeforeIndex = this.tabs.slice(0, index) // get the tabs before the tab
    let tabsAfterIndex = this.tabs.slice(index + 1) // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // join them together
  
    // Only change code above this line
  
    return this
   }
  
  //Creates three browser windows
  let workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']) // Your mailbox, drive, and other work sites
  let socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) // Social sites
  let videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']) //  Entertainment sites
  
  //Performs the tab opening, closing, and other operations
  let finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen())
  console.log(finalTabs.tabs)
  //finalTabs.tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']

/*
In functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, 
should be a pure function, meaning that it does not cause any side effects.

Its easy to mistakenly alter a letiable or object. Example below shows how to alter a letiable/object.  
*/ 

//function incrementer returns the value of the global letiable fixedValue increased by one.
let fixedValue = 4
function incrementer () {
  //return fixedValue ++ //using the ++ operator will mutate fixedValue; meaning it will no longer reference original value assigned
  return fixedValue +1
}
let newValue = incrementer() // Should equal 5
console.log(fixedValue) // Should print 4
console.log(newValue)

/*
Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a 
letiable or object being present, then pass that letiable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it 
won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can 
see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it. 

Code will provide the same result as function incrementer ().  This time passing the fixedValue2 into the function as a parameter.
In previous example, function incrementer () was dependent on letiable fixedValue.  However, the letiable was not passed directly to
function.
 */
let fixedValue2 = 7
function incrementer (value) {
  return value +1
}
let newValue2 = incrementer(fixedValue2)
console.log(fixedValue2); 
console.log(newValue2)

/*In the following code, the global array bookList is not changed inside either function. The add function adds the given bookName 
to the end of an array. The remove function removes the given bookName from an array. Both functions return an array, 
and any new parameters should be added before the bookName parameter.*/

let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* Function adds a book to the list and returns the list */
function add(arr, bookName) {
  let newArr = [...arr] // Copy the bookList array to a new array.
  newArr.push(bookName) // Add bookName parameter to the end of the new array.
  return newArr // Return the new array.
}

/* Function removes a book from the list and returns the list */
function remove(arr, bookName) {
  let newArr = [...arr] // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1) // Removes the given parameter from the new array; removes 1 element at indexOf position
    return newArr // Return the new array.
  }
}
let newBookList = add(bookList, 'A Brief History of Time')
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')

console.log(bookList)
console.log(newBookList)

/*
The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on 
each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the 
index of that element and the third is the array upon which the map method was called.

map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its 
callback function doesn't.

map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
*/

let watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ] 
  /* solution with a for loop
  let ratings = [];
  for(let i=0; i < watchList.length; i++){
    ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
  } */
  const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }))
  
  console.log(JSON.stringify(ratings));


/*
Writing an Array.prototype.myMap(), which behaves exactly like Array.prototype.map(). 
Using a for loop and the forEach methods. 
*/  
let s = [23, 65, 98, 5]

Array.prototype.myMap = function(callback){
  let newArray = []
  
  /*OptionA using this and foreach()
    The this keyword gives us access to the object we are calling myMap on.
    From there we can use the forEach method to add elements to already declared empty array as we modify each element with the given 
    callback method.*/
  //this.forEach(a => newArray.push(callback(a)))

  /*OptionB using for loop and this. 
  The use of a “for” loop allows us to apply the callback function to every item in the Global array and then push the modified items to the empty new array that is returned in the end.*/
    for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
    }
  // Add your code above this line

  return newArray
    }
    let new_s = s.myMap(function(item){
  return item * 2
    })