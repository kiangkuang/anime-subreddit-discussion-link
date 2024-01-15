import sentinel from "sentinel-js";
import { getLink } from "../utils";

export default () => {
  var title = "";
  var epi = "";

  sentinel.on(".watch-video--bottom-controls-container h4", function (el) {
    title = el.innerText;
    epi = (el.parentElement?.querySelector("span")?.innerText ?? "").replace(
      "E",
      "",
    );
  });

  sentinel.on(".SeamlessControls--container > div:last-of-type", function (el) {
    var button = el
      ?.querySelector("button")
      ?.cloneNode(true) as HTMLButtonElement;
    button.children[0].innerHTML = "Reddit";
    button.style.marginRight = "1.25rem";

    button.onclick = function () {
      window.open(getLink(title, epi), "_blank");
    };
    el?.prepend(button);
  });
};
