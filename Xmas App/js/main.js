// No more $, now he's jay! // 
var jay = window.jQuery; // jay jQuery.


// Use jQuery to select the HTML elements we're going to manipulate. //

var landingButton = jay('#landingButton');
var homeSection = jay('#SectionOpen');
var selectSection = jay('#SectionSelect');
var introBackButton = jay('#tointro');
var selectBackButton = jay('#toselect');
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



// BUTTON BACK TO INTRO
introBackButton.click(function () {
    selectSection.hide()
    landingLogo.removeClass('animated fadeOutUp');
landingButton.removeClass('infinite animated fadeOutUp');
    landingLogo.addClass('animated fadeIn');
    landingButton.addClass('animated fadeIn');
    landingButton.removeClass('animated fadeIn');
    landingButton.delay(100000).addClass('animated infinite pulse')
    homeSection.show();
})

// BUTTON BACK TO SELECT SECTION
selectBackButton.click(function () {
    sectionDrinks.hide()
    selectSection.show()
})