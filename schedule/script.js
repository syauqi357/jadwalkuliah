const toggleMenuOpen = () => document.body.classList.toggle("open");

  const nav = document.querySelector("#navbar");

/**
 * Handles the scroll event to toggle the "scrolled-down" class on the navigation element.
 * Adds the class when the scroll position is greater than 10, and removes it otherwise.
 *
 * @param {Event} event - The scroll event object.
 */
  const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 10) {
      if (!nav.classList.contains("scrolled-down")) {
        nav.classList.add("scrolled-down");
      }
    } else {
      if (nav.classList.contains("scrolled-down")) {
        nav.classList.remove("scrolled-down");
      }
    }
  };

  document.addEventListener("scroll", onScroll);