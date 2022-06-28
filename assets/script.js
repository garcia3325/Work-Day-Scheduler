
$("#currentDay").text(moment().format("dddd, MMMM Do"));

const alltextarea = $("textarea");
for (const i = 0; i < alltextarea.length; i++) {
	const ElDvHour = parseInt($(alltextarea[i]).attr("data-value"));
	const currentHour = parseInt(moment().format("HH"));
	if (ElDvHour < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (ElDvHour > currentHour) {
		$(alltextarea[i]).addClass("future");
	} else {
		$(alltextarea[i]).addClass("present");
	}
}
$(document).ready(function () {
	$("button").click(function () {
		storeTxtArea();
	});
	function storeTxtArea() {
		for (let i = 0; i < alltextarea.length; i++) {
			localStorage.setItem(
				$(alltextarea[i]).attr("id"),
				$(alltextarea[i]).val()
			);
		}
	}
	renderTxtArea();
	function renderTxtArea() {
		for (let i = 0; i < alltextarea.length; i++) {
			storedItem = localStorage.getItem($(alltextarea[i]).attr("id"));
			$(alltextarea[i]).val(storedItem);
		}
	}
});