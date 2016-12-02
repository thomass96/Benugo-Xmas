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

// MODAL
jay(document).ready(function () {
    setTimeout(function () {
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        jay(document).ready = function () {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }, 20);
});

// landing button to drink or food page
landingButton.click(function () {
    landingLogo.addClass('animated fadeOutUp');
    landingButton.addClass('animated fadeOutUp');
    homeSection.delay(500).hide(0);
    selectSection.delay(1000).show(0);

});

var resultsList = [];

//Xmas Drinks Button
xmasDrinksButton.click(function () {
    selectSection.hide();
    sectionDrinks.show();
    var filters =
        [
            {
                key: "class",
                value: "drink"
            }
        ];
    
    resultsList = filterAndSortList(productsList, filters);
    console.log(resultsList)

});

//Xmas Food Button
xmasFoodButton.click(function () {
    selectSection.hide();
    sectionFood.show();
    var filters =
    [
        {
            key: "class",
            value: "food"
        }
    ]
    
    resultsList = filterAndSortList(productsList, filters)
    console.log(resultsList);

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
    sectionFood.hide();
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
jay('input#single-checkbox').on('change', function (evt) {
    if (jay(this).siblings(':checked').length >= limit) {
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
findBttn.click(function () {
    resultsSection.hide();
    sectionMap.show();
    jay('body').css({
        "background-attachment": "inherit"
    });

});