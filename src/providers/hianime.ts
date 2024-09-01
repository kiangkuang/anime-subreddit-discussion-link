import { IProvider } from "./IProvider";
import { createElement, getLink } from "../utils";

export const hianime: IProvider = {
  isSite() {
    return window.location.hostname.includes("hianime");
  },
  inject() {
    const a = createElement(
      "a",
      { href: "#", target: "_blank", class: "btn btn-sm" },
      [createElement("i", { class: "fab fa-reddit mr-1" }), "Reddit"],
    );
    const div = createElement("div", { class: "pc-item" }, [a]);

    document.querySelector(".player-controls")?.prepend(div);

    a.addEventListener("mouseover", () => {
      const title = (
        document.querySelector(".film-name > a")?.textContent ?? ""
      )
        .replace("(TV)", "")
        .replace(/-/g, " ");

      const epi = (
        document.querySelector(".server-notice > strong > b")?.textContent ?? ""
      ).replace("Episode ", "");
      a.setAttribute("href", getLink(title, epi));
    });
  },
};
