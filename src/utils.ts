export function getLink(title: string, episode: string) {
  return `https://www.reddit.com/r/anime/search/?q=${encodeURIComponent(
    title,
  )} episode ${episode} discussion`;
}

export function createElement(
  tag: string,
  attrs: Record<string, string> = {},
  children: (string | Node)[] = [],
) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  children?.forEach((child) => el.append(child));
  return el;
}
