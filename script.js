const observer = new IntersectionObserver(fadeIn, {threshold: 0.1});

const section_list = document.querySelectorAll("section.hidden");

Array.from(section_list).forEach(section => observer.observe(section));

function fadeIn(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.remove("hidden");
			entry.target.classList.add("fadeIn");
			observer.unobserve(target);
		}
		
	});
}