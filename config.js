window.onload = function () {
  scrollSpy("#navMain", {
    sectionSelector: "section",
    targetSelector: ".nav-link",
    offset: 300,
    activeClass: "cur-color",
  });
};
