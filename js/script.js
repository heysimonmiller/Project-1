// Used in the printQuote(quote) function
var randomNumber;

// Creates an array for the new numbers to be stored in - in makeUniqueRandom() function
var uniqueRandoms = [];

// Creates a variable used for the clickButton() function. It also starts the timer so after 30seconds, the quoation will change
var timer = setInterval(printQuote, 30000);

/*
This function creates a unique random number from 0 - 19 (quotations.length)
It will not repeat until all numbers have come up
*/
function makeUniqueRandom() {
    // Refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < quotations.length; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // Remove that selected value from the array
    uniqueRandoms.splice(index, 1);

    return val;
}

// Generates the quotation and adds it in the HTML
function getQuote(quote) {
  var x = document.getElementsByClassName("quote")
  x[0].innerHTML = quote;
}

// Generates the source and adds it in the HTML
function getSource(source) {
	var x = document.getElementsByClassName("source");
	x[0].innerHTML = source;
}

// Generates the citation and adds it in the HTML
function getCitation(citation) {
  var x = document.getElementsByClassName("citation")
  x[0].innerHTML = citation;
}

// Generates the year and adds it in the HTML
function getYear(year) {
  var x = document.getElementsByClassName("year")
  x[0].innerHTML = year;
}

// Creates the src for the image and adds it in the HTML
function getImage(image) {
 var div = document.getElementById("image");
 div.src = image; //STILL NEED AN ALT IMAGE http://jsfiddle.net/Bc6Et/
}

// Generates a random color to use for changeBackgroundColor() to change the background color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Changes the background color to a random color
function changeBackgroundColor() {
	document.body.style.backgroundColor = getRandomColor();
}

// Loads new data when the user presses the 'Show another quote' button
function printQuote(quote) {
	// Generates a new random number each time the function is called
	randomNumber = makeUniqueRandom()
	
	// Inputs the HTML code and prints it to the page
	getQuote(quotations[randomNumber].quote);
	getSource(quotations[randomNumber].source);
	getCitation(quotations[randomNumber].citation);
	getYear(quotations[randomNumber].year);
	getImage(quotations[randomNumber].image);

	// Changes the background color to a random color
	changeBackgroundColor();
	console.log(randomNumber);
}

// This function resets the timer when the 'Show another quote' button is pressed.
function clickButton(){ 
   //If a timer is true, clear it's interval
    if(timer) {
        clearInterval(timer);
    } 

    printQuote();
    // Start a new timer and store it in the timer variable stated at the top of the script
    timer = setInterval(printQuote, 30000); 
}

// When the button 'Show another quote' is pressed, the clickButton() function runs.
document.getElementById('loadQuote').addEventListener("click", clickButton, false); 

// We run printQuote() once so that the first page load has a quotation, thereafter pressing the button or waiting 30s (timer) will load the next quotation.
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/*
What I have to do:
Create an array of JavaScript objects to hold the data for your quotes. Name array quotes. The quotes array should be accessible in the global scope.
Each quote object should have the following properties:
A quote property which contains a string: the text of the quote to display on the page
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb"
An optional citation property which contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes". 
If there is no known publication, then do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
Create a function named getRandomQuote which:
selects a random quote object from the quotes array
returns the randomly selected quote object
Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string using the different properties of the quote object using the following HTML template:
 <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML

-------------
Make sure you add code comments to document how your functions work
Use JSHint (see the link in the Project Resources section) to analyze your JavaScript and identify any errors or code-style problems.
Make sure your program is free of syntax errors. You can monitor any errors by looking at the Developer Tools console in your browser.
Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist.
The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

-----------------------
BONUS: http://treehouse-techdegree.s3.amazonaws.com/Student-Project-Submission-Checklist.pdf
--------------

Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.
// DONE Randomly change the background color of the page, when the quote changes
Don't display a random quote more than once until ALL quotes from the array have been displayed.
Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. 
(You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

-------------------

NOTE: A good practice is to check your project for cross browser compatibility.
Making sure that it looks and functions correctly in multiple (at least three) browsers is an important part of being a top-notch developer.
If you want, leave a comment to the project reviewer about which browser(s) the project was checked to ensure they are seeing things as you have designed them.
Some browser options:
Google Chrome
Mozilla Firefox
Internet Explorer/Edge
Safari

*/
// STARTING CODE HERE:
