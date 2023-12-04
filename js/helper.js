export function generateRandomID() {
	return crypto.randomUUID();
}

export function generateTestimonialHTML(data) {
	return data.map(
		(item) =>
			`
      <div class="testimonials__card">
        <div class="testimonials__image-container">
          <img
            src="images/pattern-bg.svg"
            alt=""
            class="testimonials__image testimonials__image--bg" />
          <img
            src="${item.img}"
            alt="${item.name}"
            class="testimonials__image testimonials__image--avatar" />
          <div class="button-container">
            <button class="btn btn--prev">
              <img
                src="images/icon-prev.svg"
                alt=""
                class="button-container__img" />
            </button>
            <button class="btn btn--next">
              <img
                src="images/icon-next.svg"
                alt=""
                class="button-container__img" />
            </button>
          </div>
        </div>
        <div class="testimonials__content-text">
          <img
            src="images/pattern-quotes.svg"
            alt=""
            class="" />
          <p
            class="testimonials__content-text__description">
            ${item.text}
          </p>
          <div class="testimonials__content__info">
            <p class="testimonials__content-text__name">
              ${item.name}
            </p>
            <p class="testimonials__content-text__job">
              ${item.job}
            </p>
          </div>
        </div>
      </div>
      `
	);
}

export function renderTestimonial(element, data) {
	element.innerHTML = "";
	element.insertAdjacentHTML("afterbegin", data);
}
