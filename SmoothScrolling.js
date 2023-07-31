
/*-----------------------------
 add class .scroll in element
*/
document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll(".scroll");

    // Smooth scrolling
    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener("click", function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute("href"));
            var targetOffsetTop = target.getBoundingClientRect().top + window.pageYOffset;
            var startPosition = window.pageYOffset;
            var distance = targetOffsetTop - startPosition;
            var startTime = null;

            function smoothScroll(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = timestamp - startTime;
                var easeProgress = progress / 1000; // Duration is 1000ms (1 second)
                var easeValue = easeInOutQuad(easeProgress);
                var newPosition = startPosition + distance * easeValue;
                window.scrollTo(0, newPosition);

                if (progress < 1000) {
                    requestAnimationFrame(smoothScroll);
                }
            }

            function easeInOutQuad(t) {
                t /= 0.5;
                if (t < 1) return 0.5 * t * t;
                t--;
                return -0.5 * (t * (t - 2) - 1);
            }

            requestAnimationFrame(smoothScroll);
        });
    });

    // Active link switching
    window.addEventListener("scroll", function () {
        var scrollbarLocation = window.pageYOffset;

        scrollLinks.forEach(function (scrollLink) {
            var target = document.querySelector(scrollLink.getAttribute("href"));
            var sectionOffset = target.getBoundingClientRect().top + window.pageYOffset - 20;

            if (sectionOffset <= scrollbarLocation) {
                scrollLink.parentElement.classList.add("active");
                Array.from(scrollLink.parentElement.parentElement.children).forEach(function (sibling) {
                    if (sibling !== scrollLink.parentElement) {
                        sibling.classList.remove("active");
                    }
                });
            }
        });
    });
});
