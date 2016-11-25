// No more $, now he's jay! // 
var jay = window.jQuery; // jay jQuery.


// Use jQuery to select the HTML elements we're going to manipulate. //

var landingButton = jay('#landingButton');
var homeSection = jay('#SectionOpen');
var selectSection = jay('#SectionSelect');
var resultsBackButton = jay('#results .back');
var landingLogo = jay('#logo');
var wordLogo = jay('#wordLogo');
var xmasDrinksButton = jay('#XmasDrinksButton')
var sectionDrinks = jay('#SectionDrinks')

// landing button to drink or food page
landingButton.click(function () {
    landingLogo.addClass('animated fadeOutUp');
    landingButton.addClass('animated fadeOutUp');
    homeSection.delay(500).hide(0);
    selectSection.delay(1000).show(0);
   
})

//Xmas Drinks Button
xmasDrinksButton.click(function () {
    selectSection.hide()
    sectionDrinks.show()

    
})



// tell the resultsBackButton to go back
resultsBackButton.click(function () {
    resultsSection.hide()
    homeSection.show()
})