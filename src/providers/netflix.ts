import sentinel from "sentinel-js";
import { getLink } from "../utils";
import { IProvider } from "./IProvider";

export const netflix: IProvider = {
  isSite() {
    return window.location.hostname.includes("netflix");
  },
  inject() {
    let title = "";
    let epi = "";

    sentinel.on(".watch-video--bottom-controls-container h4", function (el) {
      title = el.innerText;
      epi = (el.parentElement?.querySelector("span")?.innerText ?? "").replace(
        "E",
        "",
      );
    });

    sentinel.on(
      ".SeamlessControls--container > div:last-of-type",
      function (el) {
        const button = el
          ?.querySelector("button")
          ?.cloneNode(true) as HTMLButtonElement;
        button.children[0].innerHTML = "Reddit";
        button.style.marginRight = "1.25rem";

        button.onclick = function () {
          window.open(getLink(title, epi), "_blank");
        };
        el?.prepend(button);
      },
    );
  },
};
