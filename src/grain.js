(function() {
	function render(axis, layer, element) {
		const parent = element.parentNode["client" + axis[0].toUpperCase() + axis.slice(1)];
		element.style[axis] = parent * Math.pow(layer / 7, parent / 700) + "px";
	}

	function update() {
		for (var i = 1; i <= 7; i++) {
			var x = document.getElementsByClassName("x-" + i);
			var y = document.getElementsByClassName("y-" + i);

			for (var j = 0; j < x.length; j++) {
				render("width", i, x[j]);
			}

			for (var j = 0; j < y.length; j++) {
				render("height", i, y[j]);
			}
		}
	}

	var timeout;

	update();
	window.addEventListener("resize", function() {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(update, 100);
	});

	new MutationObserver(update).observe(document, {
		attributeFilter: ["class"],
		childList: true,
		subtree: true
	});
})();
