// ==UserScript==
// @name         Anime Subreddit Discussion Link
// @namespace    https://github.com/kiangkuang
// @version      1.2.1
// @author       Kiang Kuang
// @description  Adds a link to Anime Subreddit episode discussion threads on anime platforms
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @include      *://aniwave.tld/watch/*
// ==/UserScript==

(function () {
  'use strict';

  const e = $(
    '<a href="#" target="_blank" class="ctrl"><i class="fab fa-reddit"></i> Reddit</a>'
  );
  $("#controls .left").prepend(e);
  e.hover(() => {
    const title = $("#w-info .title").text().replace("(TV)", "").replace(/-/g, " ");
    const epi = $("#w-servers .tip > div:first-child > b").text();
    const href = `https://www.google.com/search?q=site:reddit.com/r/anime ${encodeURIComponent(
    title
  )} ${epi} discussion`;
    e.attr("href", href);
  });

})();