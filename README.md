# [Meta Ring](https://meta-ring.hedy.dev/)

This is a webring for personal websites. Learn more on [the webring home
page](https://meta-ring.hedy.dev/).

## How do I join?

First read the [guidelines on the
website](https://meta-ring-hedy.dev/#guidelines), make sure you've added the
[webring links](https://meta-ring.hedy.dev/#webring-code) to your website, then
submit a PR to update the [_data/members.json](_data/members.json) file.

## Development

This site is made with [Lume](https://lume.land/) and vanilla CSS. The redirect
links are handled by Netlify Functions in the `functions` directory.

**Note**: You don't need to locally run the website to add yourself into the
webring. Just submit a PR for the `_data/members.json` file.

### Requirements

- Deno 2.0

### Build

The entire home page is built from `index.md` with components as [Vento
templates](https://vento.js.org/) in the `_components` directory. A [custom
markdown-it plugin](passthrough.js) is used to prevent rendering of markdown
within these HTML components.

```sh
# Live reload
deno task lume --serve

# Build
deno task lume
```

## Credits

The idea for this webring came from [this blog
post](https://home.hedy.dev/posts/meta-pages) and [Seirdy's meta
page](https://seirdy.one/meta/).

A huge thank you to [Eric Bailey](https://ericwbailey.website/) and the [a11y
webring](https://a11y-webring.club), from which this project was built from
scratch using Lume and Deno instead of 11ty and npm.
