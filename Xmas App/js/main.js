// No more $, now he's jay! // 
var jay = window.jQuery; // jay jQuery.


// Use jQuery to select the HTML elements we're going to manipulate. //

var landingButton = jay('#landingButton');
var homeSection = jay('#SectionOpen');
var selectSection = jay('#SectionSelect');
var introBackButton = jay('#tointro');
var drinkBackButton = jay('#toselect');
var landingLogo = jay('#logo');
var wordLogo = jay('#wordLogo');
var xmasDrinksButton = jay('#XmasDrinksButton');
var sectionDrinks = jay('#SectionDrinks');
var xmasFoodButton = jay('#XmasFoodButton');
var sectionFood = jay('#SectionFood');
var foodBackButton = jay('#toselect2');
var foodButton = jay('#discoverBttn2');
var drinkButton = jay('#discoverBttn1');
var resultsSection = jay('#SectionResults');
var foodReturnBttn = jay('#tofood');
var drinkReturnBttn = jay('#todrinks');
var restartBttn = jay('.RestartButton');
var findBttn = jay('.findBttn');
var sectionMap = jay('#SectionMap');

// landing button to drink or food page
landingButton.click(function () {
    landingLogo.addClass('animated fadeOutUp');
    landingButton.addClass('animated fadeOutUp');
    homeSection.delay(500).hide(0);
    selectSection.delay(1000).show(0);

});

//Xmas Drinks Button
xmasDrinksButton.click(function () {
    selectSection.hide();
    sectionDrinks.show();


});

//Xmas Food Button
xmasFoodButton.click(function () {
    selectSection.hide();
    sectionFood.show();

});




// BUTTON BACK TO INTRO
introBackButton.click(function () {
    selectSection.hide();
    landingLogo.removeClass('animated fadeOutUp');
    landingButton.removeClass('infinite animated fadeOutUp');
    landingLogo.addClass('animated fadeIn');
    landingButton.addClass('animated fadeIn');
    landingButton.removeClass('animated fadeIn');
    landingButton.delay(100000).addClass('animated infinite pulse');
    homeSection.show();
});

// DRINK BACK TO SELECT SECTION
drinkBackButton.click(function () {
    sectionDrinks.hide();
    selectSection.show();
});

// FOOD BACK TO SELECT SECTION
foodBackButton.click(function () {
    sectionFood.hide();
    selectSection.show();
});

// FOOD TO RESULTS
foodButton.click(function () {
    sectionFood.hide()
    resultsSection.show();


});

// DRINKS TO RESULTS
drinkButton.click(function () {
    sectionDrinks.hide();
    resultsSection.show();
});

// BUTTON BACK TO FOOD OPTION
foodReturnBttn.click(function () {
    resultsSection.hide();
    sectionFood.show();
});

//BUTTON BACK TO DRINKS OPTION
drinkReturnBttn.click(function () {
    resultsSection.hide();
    sectionFood.show();
});

// CHECKBOX LIMITS
var limit = 2;
$('input#single-checkbox').on('change', function (evt) {
    if ($(this).siblings(':checked').length >= limit) {
        this.checked = false;
    }
});

//RESTART BUTTON
restartBttn.click(function () {
    resultsSection.hide();
    sectionMap.hide();
    selectSection.show();
});

// BUTTON TO MAP
findBttn.click(function (){
    resultsSection.hide();
    sectionMap.show();
    $('body').css({"background-attachment" : "inherit"});
    
});
