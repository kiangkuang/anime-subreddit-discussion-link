# Anime Subreddit Discussion Link

Adds a link to Anime Subreddit episode discussion threads on anime platforms.

Currently supported sites:

- [AniWave](https://aniwave.to)
- [Netflix](https://netflix.com)

## Install

1. Install Tampermonkey
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [FireFox](https://addons.mozilla.org/firefox/addon/tampermonkey)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
2. [![Install](https://img.shields.io/badge/-Install-blue)](installUrl)

## Development

1. Customize userscript headers in [vite.config.ts][userscriptConfig]
2. Modify [src/main.ts][inputFile] to implement userscript logic
3. Run `npm run dev` to install script with hot module replacement using vite
4. Run `npm run build` to build the resulting [script.user.js][outputFile]
5. Run `npm run preview` to install the built script through the vite dev server

## Deployment

This template is currently configured with a pre-commit hook to run

```
npm run build
git add dist
```

This ensures that the [script.user.js][outputFile] file in the repository will automatically be up to date with the source code.

This allows users to use this [link][installUrl] as the installation link.

Alternatively, you can remove this behavior by

1. Remove command in [pre-commit](/.husky/pre-commit#L5-L6)
2. Add `dist` to [.gitignore](/.gitignore)
3. Run `npm run build` whenever you want

[userscriptConfig]: /vite.config.ts#L4
[inputFile]: /src/main.ts
[outputFile]: /dist/script.user.js
[installUrl]: /dist/script.user.js?raw=1
