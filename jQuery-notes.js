// Lesson 1, 2 and 3

jQuery is not a programming language, it is a library for Java Script
jQuery allows for work between js and the DOM to be much easier, as well as working with events and animations

jQuery also helps a lot by chaining methods/effects etc to elements in one line using periods in between. jQuery also has tons of pluggings as well


// Lessons 4, 5 and 6

//Part 4
To get an element from the document with jQuery you can start by adding a dollar sign $ and then looking for the specific ID/Class/tag you need
for example:
document.getElementById("#hello");
vs
$("#hello");


Also, jQuery will return not just the element object, but it will return a jQuery object with the element in it
$('#hello');
will return: [<h1 id = "hello"> Hello World </h1>]
This means that the jQuery object can be worked through like an array and accepts array methods
var car = $('#hello');
car[0]; 
The above code will return what is in position 0 of the car variable. The element associated with that id will print outside of the array and array methods will no longer work

//Part 5
jQuery allows us to quickly affect css styles
$("h3").css({border: "3px solid blue"}); This code will grab the h3 element and give it a border property style with 3px thickness, solid so it is visible, and blue

$(".wrapper").css({border: "3px solid red"}); This code targets the class wrapper

$("#clients").css({border: "3px solid yellow"}); This code targets the id clients

//Part 6
filters can be used to refine the selectors further and affect elements that get through the filter

$("header nav li:first").css({border:"2px solid red"}); this code goes to the header, the nav inside the header, the li inside the nav, and the colon filters to the first    
$("header nav li:last").css({border:"2px solid red"}); this code goes to the header, the nav inside the header, the li inside the nav, and the colon filters to the last

$("#contact ul:first").css({border:"2px solid red"}); this code goes to the FIRST ul element inside the ID contact and applies css to it 
$("#contact ul:last-child").css({border:"2px solid red"}); this code goes to the last child in the contact ID, not the last ul. The last child will ignore the UL and find the very last element inside the contact element, this is the p element

$("header nav li:even").css({border:"2px solid blue"}); this code will go into the header element, the nav element, and it grabs all the li elements whose index is an even number starting at 0
$("header nav li:odd").css({border:"2px solid blue"}); this code will go into header, nav, and grab the li with odd index numbers

$("section:not('#contact')").css({border:"2px solid green"}); this code can be used to filter out an element you do not want to affect, in this case the border green is applied to the 3 elements sections but the one with ID contact is ignored

$("#social-nav li:lt(3)").css({border:"2px solid blue"}); this code is the LESS THAN filter, it looks at social-nav ID and finds the LI whose index is lass than 3 and not including 3

$("#social-nav li:gt(2)").css({border:"2px solid blue"}); this code gets the li inside the ID social-nav and applies the code to those whose index is more than 2

This is an attribute filter. This targets elements with an attribute in it regardless of the value inside that attribute:
$("div[class]").css({border:"2px solid pink"}); find all the divs in the page and, if they have a class (any class) give it a div. 
$("img[alt]").css({border:"2px solid pink"}); will target all the img elements with alt attribute regardless of the value of the attribute

$("img[alt-quote]").css({border:"2px solid purple"}); This gets all the images with alt attribute equal to quote