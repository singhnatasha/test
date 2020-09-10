var main = document.getElementsByClassName("main")[0],
		chapters = document.getElementsByClassName("chapter"),
		navMenu = document.getElementsByClassName("cell"),
		prev = document.getElementsByClassName("prev")[0],
		next = document.getElementsByClassName("next")[0],
		percentages = [0, 13, 23, 37, 51, 65, 80, 100, 100, 115],
		current = 0;

// Calls the scrollChapter function with an argument based on the summum of the current variable,
// and the vallue corresponding to the left and right arrow, which is '-1' and '1' respectively.
function chapterArrows(number) {
	scrollChapter(current += number);
}

function scrollChapter(number) {
	current = number;
	prev.style.display = "block";
	next.style.display = "block";

	// Sets the arrow button display to none if there are no previous or next chapters to display.
	if (number == 0)
		prev.style.display = "none";
	else if (number == chapters.length -1)
		next.style.display = "none";

	// Iterates over the elements of the 'chapter' and 'cell' HTMLCollection and adds a class to each of them.
	for (var chapter of chapters) {
		chapter.className = "chapter ";
	}

	for (var cell of navMenu) {
		cell.className = "cell ";
	}

	// Adds a class to each of the 'current-chapter' and '-cell' objects to make it the current visible chapter.
	// Changes the backgroundposition of the 'main' division based on the value of 'number'.
	chapters[number].classList.add("current-chapter");
	navMenu[number].classList.add("current-cell");
	main.style.backgroundPosition = percentages[number] + "%";

	// Adds the 'final-chapter' class to the last chapter division in order for it to scroll into the screen.
	if (number == 9)
		chapters[9].classList.add("final-chapter");
}