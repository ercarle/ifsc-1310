/*
document.addEventListener('DOMContentLoaded', function() {
	document.body.classList.add('loaded');

	document.querySelectorAll('a').forEach(link => {
		if (link.hostname !== window.location.hostname || 
			link.classList.contains('no-transition') || 
			link.target === '_blank') {
			return;
		}

		link.addEventListener('click', function(event) {
			if (link.hash && link.pathname === window.location.pathname) {
				return;
			}

			event.preventDefault();

			document.body.classList.remove('loaded');
			document.body.classList.add('unload');

			setTimeout(() => {
				window.location.href = link.href;
			}, 500);
		});
	});
});*/


// looks super tacky right now, i'll fix in the next rendition