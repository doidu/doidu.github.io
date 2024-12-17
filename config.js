window.onload = function () {
  scrollSpy("#navMain", {
    sectionSelector: "section",
    targetSelector: ".nav-link",
    offset: 300,
    activeClass: "cur-color text-zinc-400",
  });
};
tailwind.config = {
  theme: {
    extend: {
      screens: {
        "atom": "0px", // prettier-ignore
      },
    },
  },
};
