var $square = $("<div />", {class: 'square'});

$(document).ready(function() {
	initGrid(16);
	resetGrid();
	newGrid();
});

function initGrid(squareWidth) {
	var squareSize = 960 / squareWidth - 2;

	for (var i = 0; i < squareWidth * squareWidth; i++) {
		$("#container").append($square.clone());
	}

	$(".square").width(squareSize);
	$(".square").height(squareSize);

	sketchGrid();
};

function sketchGrid() {
	$(".square").hover(function() {
		$(this).css("background-color", "#669933");
	});
};

function resetGrid() {
	$("button").click(function() {
		$(".square").css("background-color", "#FFFFFF");
		var newSize = prompt("Enter new grid size between 1-64.");
		while (newSize < 1 || newSize > 64) {
			if (newSize < 1 || newSize > 64) {
				alert("Please enter a number between 1-64.");
				newSize = prompt("Enter new grid size between 1-64");
			}
		}
		newGrid(newSize);
	});
};

function newGrid(newSize) {
	initGrid(newSize);
};
