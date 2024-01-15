export default () => {
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
    const href = `https://www.reddit.com/r/anime/search/?q=${encodeURIComponent(
      title,
    )} episode ${epi} discussion&sort=hot`;
    e.attr("href", href);
  });
};
