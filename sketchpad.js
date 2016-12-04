$(document).ready(function() {
    initGrid(size);
    sketchGrid();
    resetGrid();
});

var size = 16;
var screenWidth = 960

// Initially builds a 16x16in grid appending 58x58px boxes inside container.
var initGrid = function(size) {
    var squareSize = ( 960 / size ) - 2;
    for ( var i = 0; i < size * size; i++) {
        $("#container").append("<div class='square'></div>");
    }

    $(".square").width(squareSize);
    $(".square").height(squareSize);
};

// Changes box color to green up mouse hovering over box.
var sketchGrid = function() {
    $(".square").hover(function() {
        $(this).css("background-color", "#669933");
    });
}

// Receive user input on new grid size until requirement satisified.
var resetGrid = function() {
    $("button").click(function() {
        $(".square").css("background-color", "#FFF");
        var gridSize = prompt("Enter new grid size between 1-64.");
        while (gridSize < 1 || gridSize > 64) {
            if (gridSize < 1 || gridSize > 64) {
                alert("Please enter a number between 1-64.");
                gridSize = prompt("Enter new grid size between 1-64");
            }
        }
        initGrid(gridSize);
    });
};
