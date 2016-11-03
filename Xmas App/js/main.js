// No more $, now he's jay! // 
var jay = window.jQuery; // jay jQuery.


// Use jQuery to select the HTML elements we're going to manipulate. //

var homeGoButton = jay('#home button');
var homeSection = jay('#home');
var resultsSection = jay('#results');
var resultsBackButton = jay('#results .back')

// tell the button to do something when we click it
homeGoButton.click(function () {
    homeSection.hide()
    resultsSection.show()
})

// tell the resultsBackButton to go back
resultsBackButton.click(function () {
    resultsSection.hide()
    homeSection.show()
})