import { generateTestimonialHTML, renderTestimonial } from "./helper.js";
import { testimonail } from "./testimonialData.js";

const testimonialsContainer = document.querySelector(
	".testimonials__container"
);

let index = 0;
const testimonialsHTML = generateTestimonialHTML(testimonail);

function init() {
	renderTestimonial(testimonialsContainer, testimonialsHTML.at(index));
}

init();

document.body.addEventListener("click", function (e) {
	const btn = e.target.closest(".btn");

	if (!btn || !btn.closest(".button-container")) return;

	if (btn.classList.contains("btn--prev")) {
		index--;
		if (index < 0) {
			index = testimonialsHTML.length - 1;
		}
		renderTestimonial(testimonialsContainer, testimonialsHTML.at(index));
	}

	if (btn.classList.contains("btn--next")) {
		index++;
		if (index > testimonialsHTML.length - 1) {
			index = 0;
		}
		renderTestimonial(testimonialsContainer, testimonialsHTML.at(index));
	}
});
