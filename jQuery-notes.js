--------------------------------// Lesson 1, 2 and 3

jQuery is not a programming language, it is a library for Java Script
jQuery allows for work between js and the DOM to be much easier, as well as working with events and animations

jQuery also helps a lot by chaining methods/effects etc to elements in one line using periods in between. jQuery also has tons of pluggings as well


--------------------------------// Lessons 4, 5 and 6

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
$("h3").css({border: "3px solid blue"}); / This code will grab the h3 element and give it a border property style with 3px thickness, solid so it is visible, and blue

$(".wrapper").css({border: "3px solid red"}); / This code targets the class wrapper

$("#clients").css({border: "3px solid yellow"}); / This code targets the id clients

//Part 6
filters can be used to refine the selectors further and affect elements that get through the filter

$("header nav li:first").css({border:"2px solid red"}); / this code goes to the header, the nav inside the header, the li inside the nav, and the colon filters to the first    
$("header nav li:last").css({border:"2px solid red"}); / this code goes to the header, the nav inside the header, the li inside the nav, and the colon filters to the last

$("#contact ul:first").css({border:"2px solid red"}); / this code goes to the FIRST ul element inside the ID contact and applies css to it 
$("#contact ul:last-child").css({border:"2px solid red"}); / this code goes to the last child in the contact ID, not the last ul. The last child will ignore the UL and find the very last element inside the contact element, this is the p element

$("header nav li:even").css({border:"2px solid blue"}); / this code will go into the header element, the nav element, and it grabs all the li elements whose index is an even number starting at 0
$("header nav li:odd").css({border:"2px solid blue"}); / this code will go into header, nav, and grab the li with odd index numbers

$("section:not('#contact')").css({border:"2px solid green"}); / this code can be used to filter out an element you do not want to affect, in this case the border green is applied to the 3 elements sections but the one with ID contact is ignored

$("#social-nav li:lt(3)").css({border:"2px solid blue"}); / this code is the LESS THAN filter, it looks at social-nav ID and finds the LI whose index is lass than 3 and not including 3

$("#social-nav li:gt(2)").css({border:"2px solid blue"}); / this code gets the li inside the ID social-nav and applies the code to those whose index is more than 2

This is an attribute filter. This targets elements with an attribute in it regardless of the value inside that attribute:
$("div[class]").css({border:"2px solid pink"}); / find all the divs in the page and, if they have a class (any class) give it a div. 
$("img[alt]").css({border:"2px solid pink"}); / will target all the img elements with alt attribute regardless of the value of the attribute

$("img[alt-quote]").css({border:"2px solid purple"}); /This gets all the images with alt attribute equal to quote


--------------------------------// Lessons 7, 8, and 9

//Part 7

The DOM is a way to describe the relationship between elements on a page and gives us a way to target and work with them

jQuery makes it easier to traverse the DOM tree

The NEXT method grabs and element and give us the next one in line:
$("#contact-methods").next().css({border:"3px solid red"}); / Here we target the ID then tell it to look at the next element after this one and affect it

The PREVIOUS method:
$("#social-nav").prev().css({border:"3px solid red"}); / this find the previous element above

The PARENT method:
$(".banner-title").parent().css({border:"3px solid pink"}); / this finds the parent element of the banner title class element.  
if you add an s (parents) then this will go up the tree and grab all parents (parent, granddad, greatGrandDad etc)

The Children method:
$("#social-nav").children().css({border:"3px solid red"}); / will grab all the children of the current element

The FIND method:
$("#contact").find(".facebook").css({border:"3px solid red"}); / looks for a class called facebook within the contact ID section

The CLOSEST method:
$("#social-nav").closest(".wrapper").css({border:"3px solid red"}); / Gets the closest parent with a class of parent and skips and parent in the tree that does not match


// Part 8

CHAINING

This chain starts with one method and changes css then launches into the next chained element but if it gets long it gets unreadable and hard to deal with
$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

This chain is more readable
$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});
    
    
//Part 9

ADDING CONTENT USING JQUERY

We want to add this element
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>";

this code will append the variable tweet into the section with ID tweets and will add it at the bottom of the div box
$("#tweets div").append(tweet);

this code will add content before the p tag inside the div being called out
$("#tweets div").prepend(tweet);

this code will place the content exactly before the element being called out
$("#tweets p").before(tweet);

this code will place the content exactly after the element being singled out
$("#tweets p").prepend(tweet);

this code will change out the p html currently inside the div into the new html inside the variable tweet
$("#tweets div").html(tweet);

this will turn everything inside the tweet variable (even the html code) into text and print it inside the p tag replacing anything in it
$("#tweets div p").text(tweet);


--------------------------------// Lessons 10, 11, and 12

//Part 10

USING WRAP AND UNWRAP ELEMENTS  

this wraps all called elements individually
$("section").wrap("<div>"); / This find the section element and wraps every single one into its on div tag

$("section").unwrap(); / will take off the the PARENT element of whatever tag you are calling out. No need to specify the parent

$("section").wrapAll("<div>"); / will wrap all the sections element together into one div tag instead of individually

USING THE WRAP COMMANDS:

var wrapper = "<div class='wrapper'>"; / the html we want to use to wrap things when we call this variable
var button = $(".button");              / we can call the element with class button this way (remember using $ will return a jQuery array)
var wrapped = true; 

button[0].onclick = function(){   / The first part removes the button out from the jQuery array then runs function onclick
    if(wrapped){                    / If the function is wrapped (which equals to true)
        $("section").unwrap();      / then target the element section and unwrap it, change wrapped to false, and change the text to "wrap"
        wrapped = false;
        button.text("wrap");
    } else {                            / however, if wrapped = false then wrap the whole thing in the wrapper called out above, change wrapped to true and the text to "Unwrap"
        $("section").wrapAll(wrapper);  
        wrapped = true;
        button.text("Unwrap");
    }
};


// Part 11

REMOVING CONTENT FROM THE HTML USING JQUERY

.empty() - empties the inner html of an element
.remove() - remove the element completely

This targets the element with class button and empties out the html inside it
$(".button").empty(); 

This removes the html with class button completely
$(".button").remove();


// Part 12

CHANGING ATTRIBUTES

.removeAttr() removes an attribute completely
.attr() can read or set any attribute

This will target the img inside the tag with contact ID and remove the alt attribute currently called "map"
$("#contact img").removeAttr("alt");

This targets the same img and needs TWO arguments, the attribute and the value (alt="location")
$("#contact img").attr("alt", "location");

If you do not pass a second argument you can call out the source attribute. The below, run on the console, will return the value of the "alt" attribute of the img called out
console.log($("#contact img").attr("alt"));


--------------------------------// Lessons 13, 14, and 15

// Part 13

ADDING AND CHANGING CSS PROPERTIES AND THEIR VALUES

If we want to CHECK the value of a css property we find the element then call the property
$("#social-nav").css("top");

If we want to CHANGE the value of a css property we pass two arguments, the property then the value
$("#social-nav").css("top", "-200px");

We can ADD properties that dont exist (left doesnt exist in our page) and give it a value
$("#social-nav").css("top", "-200px").css("left", "100px");

Chaining can get out of hand so it is possible to create an object to keep all your values
$("#social-nav").css({
    "top" : "-40px",
    "left" : "150px",
    "opacity" : "0.5",
    "border-top" : "50px solid red"
});


// part 14

ADDING AND REMOVING CLASSES

This will go into the header then into the div with class wrapper and remove the wrapper class so the css no longer affects the element
$("header .wrapper").removeClass("wrapper");

this will find the immediate descendant div and add the wrapper class
$("header > div").addClass("wrapper");

The toggleClass checks whether the element has the given class and gives it to it or takes it away

var button = $("#lead-banner a");   / We make a button variable that calls the button in the html

button[0].onclick = function(){                / take it out of the jQuery string and run an onclick event
    $("#points-of-sale").toggleClass("open");  /add the class open if not-there or take it away if there on click of the button 
    return false;                               /The <a> tag is used for links and by default wants to go to a link onclick. Returning false kills the default behavior
};


// part 15

EVENTS BINDING

Anything you do on a website is an event and we can make jQuery respond to those events (click events, hovering, scrolling, moving your mouse across the page, etc)

.on(); binds the event to matched element(s). This method takes TWO arguments, the event listener like "click" and the callback function that will run when event happens
.off(); unbinds the event from matched element(s)


var myLis = $("#points-of-sale li");  /we created a variable for all the <li> inside the points of sale element

myLis.on("click", function(){  / We bind myLis using .on() and give it arguments click and function to run after click
    
    $(this).css({"background" : "pink"});  / the first part of the function will give pink background to the currently selected <li>
    
    myLis.off("click"); / using the unbind method .off() we can unbind the unselected elements so the binding does not work on them any longer
});


--------------------------------// Lessons 16, 17, and 18

//Part 16

EVENT HELPERS

Event helpers are short hand ways to write jQuery events. For example:

$("#contact").on("click", function (){...}); 

can be written as:

$$("#contact").click(function (){...}); / jQuery will know that you are calling for onclick


The event helper will wrap the function but you can still unwrap it just like before:

$("#lead-banner").click(function(){ / event helper wraps the lead-banner into a click event
    alert("you clicked me!");
    $("#lead-banner").off("click"); / after the click is done and the function runs we unwrap it from the event
});


//Part 17

DOCUMENT READY VS WINDOW LOAD

if the scrip tag is at top of page you can load in this way:

LOAD SCRIPT RIGHT AFTER THE DOM IS LOADED (/to be used if you only need the HTML loaded and dont care if the values are loaded or not/)
$(document).on("ready", function(){ / all your page code goes here/ });
OR
$(document).ready(function(){ /all your page code goes here/ }); /this uses the event helper short hand
OOORRRR
$(function(){ /all your page code goes here/ }); / The dollah sign calls the document anyways


LOAD SCRIPT RIGHT AFTER THE COMPLETE PAGE IS LOADED, VALUES AND ALL (/To be used if your scrip relies on working with the values inside yout tags/)
$(window).on("load", function(){ /your page code goes here/ });
OR
$(window).load(function(){ /your page code goes here/ });


//Part 18

JQUERY EVENTS OBJECT

The event object is used to access the TON of information that is gathered when an user interacts with the DOM

The following playes with the event object:

$("*").on("click", function(e){                                     /the star calls ALL elements, the letter refers to the event, we can rename this argument to anything at all, doesnt matter
        console.log(e.target);                                      /this code sees the event done on the target (meaning the exact thing we just clicked) and returns the target element that was clicked                
        console.log("The event type is " + e.type);                 /this will tell us the type of the even (if we click an element it will tell us that the event was "click")
        console.log("x co-ordinate of the event is: " + e.pageX);   /this will tell us where in X axis we clicked (values in pixels)
        console.log("y co-ordinate of the event is: " + e.pageY);   /this will tell us where in Y axis we clicked (values in pixels)
        e.stopPropagation();                                        /stopPropagation will stop the event from bubbling up
    });
    
/IMPORTANT/
.stopPropagation is an important part of the code 
Any element you are trying to target is going to be nested inside another element (its parent)
The click event looks at the target element you just clicked AS WELL AS its parents (and so on up the tree)
stopPropagation forces the event to look at the one target and stop


--------------------------------// Lessons 19, 20, and 21

// Part 19

ANIMATIONS IN JQUERY

 $("section > h2").on("click", function(){      / call what we want to annimate and give it an event
        
        $(this).animate({                       / animate is a LOT like CSS, we can run the css properties as animate properties (animate does have a few of its own properties)
            "width": "500px",                   / animate works with numerical values only
            "height": "100px",                  
            }, 400, "linear", complete);        / animate takes 4 arguments: first can be the object like css, second is length to animate in milliseconds, third is linear or swing, fourth is callback function
        });                                     / animate is swing by default (starts slow, gets faster, ends slow), linear makes it the same speed (swing is more natural)
        
function complete(){                            / The fourth parameter of an animation is a call back function to run at the end of the animation. In this function we alert "Animation Complete" at the end of the animation
    alert("Animation Complete");
}

// Part 20

FADING ELEMENTS

.fadeOut(/time/);              / increases the opacity until the element is completely transparent. it takes 1 argument, how long it takes to run. When opacity is complete the element pretty much disappears (it rearranges the elements in the page)
.fadeIn(/time/);               / decreases the opacity until solid, it takes one parameter (the speed)
.fadeTo(/time, opacity/);      / takes two parameters, first is speed, second is popacity

// Part 21

SHOW, HIDE, TOGGLE

.hide(/time/);              / this method will animate the remove the element completely either quickly (no parameter), or with a speed
.show(/time/);              / will animate the addition of the element
.toggle(/time/);            / this method shows or hides depending on the event (TIP do not toggle the element the event is on or it will dissapear and you wont be able to click it back)


--------------------------------// Lessons 22, 23, and 24

// Part 22

SLIDE METHODS (UP/DOWN)

.slideUp(/time, callback/);         / this method will animate and close the called element upwards, a second parameter can be added for a call back fundtion to run when complete
.slideDown(/time, callback/);       / this method will animate and close the called element downwards
.slideToggle(/time, callback/);     / Slides up OR down depending on whether it is already up or down. It also can have a call back


