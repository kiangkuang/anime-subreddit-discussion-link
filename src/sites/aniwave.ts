import { createElement, getLink } from "../utils";

export default () => {
  var e = createElement(
    "a",
    {
      href: "#",
      target: "_blank",
      class: "ctrl",
    },
    [createElement("i", { class: "fab fa-reddit" }), " Reddit"],
  );

  document.querySelector("#controls .left")?.prepend(e);

  e.addEventListener("mouseover", () => {
    // const title = (document.querySelector("#w-info .names")?.textContent ?? "").split(";")[0]
    const title = (document.querySelector("#w-info .title")?.textContent ?? "")
      .replace("(TV)", "")
      .replace(/-/g, " ");
    const epi = (
      document.querySelector("#w-servers .tip > div:first-child > b")
        ?.textContent ?? ""
    ).replace("Episode ", "");
    e.setAttribute("href", getLink(title, epi));
  });
};
