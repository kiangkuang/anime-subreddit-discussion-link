import aniwave from "./sites/aniwave";
import netflix from "./sites/netflix";

if (window.location.hostname.includes("aniwave")) {
  aniwave();
} else if (window.location.hostname.includes("netflix")) {
  netflix();
}
