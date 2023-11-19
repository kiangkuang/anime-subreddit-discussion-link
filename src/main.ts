const e = $(
  '<a href="#" target="_blank" class="ctrl"><i class="fab fa-reddit"></i> Reddit</a>',
);
$("#controls .left").prepend(e);

e.hover(() => {
  const title = $("#w-info .title")
    .text()
    .replace("(TV)", "")
    .replace(/-/g, " ");
  const epi = $("#w-servers .tip > div:first-child > b").text();
  const href = `https://www.google.com/search?q=site:reddit.com/r/anime ${encodeURIComponent(
    title,
  )} ${epi} discussion`;
  e.attr("href", href);
});
