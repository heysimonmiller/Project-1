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
Randomly change the background color of the page, when the quote changes
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

//Print the quotation to the page
function printQuote(quote) {
  var x = document.getElementsByClassName("quote")
  x[0].innerHTML = quote;
}

//prints the source to the page and re-adds in the <span class="citation"></span><span class="year"></span> 
function printSource(sourceInput) {
	var x = document.getElementsByClassName("source");
	x[0].innerHTML = sourceInput;
}

//Print the citation to the page
function printCitation(citation) {
  var x = document.getElementsByClassName("citation")
  x[0].innerHTML = citation;
}

//Print the year to the page
function printYear(year) {
  var x = document.getElementsByClassName("year")
  x[0].innerHTML = year;
}


// Creates a random number from 0 - 19 (as the first number in the array is 0)
function getRandomNumber(quotationsLength) {
  var num = Math.floor(Math.random() * quotationsLength); 
  return num;
}



// Creates the src for the image
function getImage(image) {
 var div = document.getElementById("image");
 div.src = image; //STILL NEED AN ALT IMAGE http://jsfiddle.net/Bc6Et/
}

var quotationsLength = quotations.length;

var randomNumber = getRandomNumber(quotationsLength);

// Creates the text inbetween the paragraph tag (used for printSource)
var sourceInput = quotations[randomNumber].source;
//sourceInput += '<span class="citation"></span><span class="year"></span>';

//quotations[0].source'<span class="year">'quotations[0].citation'</span>''<span class="year">'quotations[0].year'</span>';


printQuote(quotations[randomNumber].quote);
printSource(sourceInput);
getImage(quotations[randomNumber].image);
printCitation(quotations[randomNumber].citation);
printYear(quotations[randomNumber].year);



/*
//TESTING UNDERNEATH

var test = document.getElementById('quote-box').getElementsByTagName('span').getelementsbyClassName('citation');
obj = {};
for (var i = 0, l = spans.length; i < l; i++) {
    obj[spans[i].id] = spans[i].textContent || spans[i].innerText;
}

console.log(obj);


function myFunction(citation) {
    var x = document.getElementById("quote-box");
    x.getElementsByClassName("citation")[0].innerHTML = citation;
} // WORKS IF IT"S NOT IN THE <p> TAG??!
myFunction(quotations[0].citation);
*/
/*
function myFunction(citation) {
    var x = document.getElementsByClassName("citation");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = citation;
    }
}
Change the background color of all elements with class="example":

var x = document.getElementsByClassName("example");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}
*/


