---
title: "Meta Ring"
templateEngine: [vento, md]
---

<h1><a href="#">#</a> Meta Ring</h1>

A webring for people who enjoys tinkering with their personal websites and
writes about it in "meta" pages, like a colophon.

Do you have a `/meta` page or even a full-blown changelog? Consider adding
one!

Read about the [related blog post](https://home.hedy.dev/posts/meta-pages/) or
check out the [context and guidelines below](#guidelines) for more information.

## Can I join?

Of course! Anyone with a personal website is welcome to join if the following
requirements are met:

### Guidelines

1. Your website should either have a dedicated page, such as `/meta` or
   `/colophon` that includes information about your website itself, or a
   dedicated section in your about page or elsewhere that talks about your
   personal site in detail.

   This could be anything you want to write about which you see fit -- what do
   you care a lot about on your personal site? Is it accessibility? Is it the
   fonts, the color scheme, or other aspects of design? Is it your blogging
   workflows, or did you hack together your own script to build your site from
   your own custom content format? Write about it, or link to those blog posts
   where you wrote about your site's updates!
1. The page or section in question should be discoverable using only the
   navigation links on your website; i.e., someone who visits your website
   from this webring should be able to find your meta page by clicking through
   your website.
1. You should include the webring's previous and next links (as provided below)
   somewhere on your website.

   To allow members of the webring to be visited in a circuit (like a "ring"),
   a visitor who came from the site before you in the webring, should be able to
   find the previous and next links and visit the next link in the webring;
   these links don't need to be on your home page, but like the meta page, it
   should be discoverable through your site navigation.

### Rules

1. Your site should not contain inappropriate, illegal, or immoral content,
   including ableist, highly NSFW, homophobic, transphobic, pornographic or
   similar material.
1. This webring focuses on personal websites. This means product and project
   home pages will **not** be accepted.

   It's great to know about the technology behind your project sites, but the
   purpose of this webring is to encourage unique personal sites, the joy of
   exploration and tinkering with technology, reflecting it in your personal
   site, and sharing it with the world.

## How do I join?

Awesome! If you feel the [guidelines](#guidelines) above describes you, follow
these steps to add yourself to the webring:

1. Ensure your submission follows the [rules](#rules) listed above.
1. Update your site to include links to this webring, and the links for the
   previous, next, and optionally random site. See the [webring
   links](#webring-code) below.
1. Submit a PR to the GitHub repo for this site by updating the
   `_data/members.json` with your new entry:
```json
  {
    "name": "Your Name (or your site's name)",
    "url": "<your personal site>"
  }
```

### Webring code

The link to the webring home page, and the previous and next links should be
added to your site before submitting your PR. Here's an example:

```html
<p>
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
```
:::
<p>
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
:::

## Webring members

{{ comp.list() }}

## Updates

{{ comp.updates() }}
