---
title: "Meta Ring"
templateEngine: [vento, md]
---

<h1><a href="#">#</a> Meta Ring</h1>

*Welcome to the Meta Ring!*

This is a webring for people who enjoys tinkering with their personal websites
and writes about it in "meta" pages, like a colophon.

Do you have a `/meta` page or even a full-blown changelog? Consider adding
one!

Read about the [related blog post](https://home.hedy.dev/posts/meta-pages/) or
check out the [guidelines below](#guidelines) for context on "meta pages".

## Can I join?

Of course! Anyone with a personal website is welcome to join if the following
requirements are met:

### Guidelines

<ol>
  <li>

    Your website should either have a dedicated page, such as `/meta` or
    `/colophon`, or a dedicated section in your about page or elsewhere that
    talks about your personal site in detail.

    <details><summary>What should it be about?</summary>

    This could be anything you want to write about which you see fit -- what do
    you care a lot about on your personal site? Is it accessibility? Is it the
    fonts, the color scheme, or other aspects of design? Is it your blogging
    workflows, or did you hack together your own script to build your site from
    your own custom content format?

    Write about it, or link to those blog posts where you wrote about your
    site's updates!

    Check out some examples below in the [member list](#members), or in
    [this blog post](https://home.hedy.dev/posts/meta-pages/#examples).
    </details>
  </li>
  <li>

    The meta page or the page with the colophon section in question should be
    discoverable -- it should be linked where someone visiting your site from
    this webring can find.
  </li>
  <li>

    You should include the webring's previous and next links as provided
    [below](#webring-code) somewhere on your website. (That makes the "ring" in
    webrings!)

    <details><summary>Show details</summary>

    To allow members of the webring to be visited in a circuit, a visitor who
    came from the site before you in the webring, should be able to find the
    previous and next links and visit the next link in the webring.

    These links don't need to be on your home page, but like the meta page, it
    should be discoverable through your site navigation.
    </details>
  </li>
</ol>


### Rules

<ol>
  <li>

    Your site should not contain inappropriate, illegal, or immoral content,
    including ableist, highly NSFW, pornographic, or similar material.
  </li>

  <li>

    This webring focuses on **personal websites**. This means organization and
    project home pages will not be accepted.

    <details><summary>Why?</summary>

    It's great to know about the technology behind your project sites, but the
    purpose of this webring is to encourage unique personal sites, the joy of
    exploration and tinkering with technology, reflecting it in your personal
    site, and sharing it with the world.
    </details>

  </li>
</ol>

## How do I join?

Awesome! If you feel the [guidelines](#guidelines) above describes you, follow
these steps to add yourself to the webring:

1. Ensure your submission follows the [rules](#rules) listed above.

1. List the webring on your website. See [webring code](#webring-code) below for
   an example.

1. Submit a PR to the [GitHub
   repo](https://github.com/hedyhli/meta-ring/blob/main/_data/members.json) for
   this site by updating the `_data/members.json` with your new entry:

```json
  {
    "name": "Your Name (or your site's name)",
    "url": "https://website.example/",
    "colophon": "https://website.example/meta"
  }
```

### Webring code

The link to this page, and the **previous** and **next** links should be added
to your site before submitting your PR. You can omit the random link if you
like.

Here's an example:

```html
<p style="text-align: center;">
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:<br/>
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
```

And it looks like this...

:::
<div style="border: 1px solid var(--border); padding: 1rem 0; border-radius: var(--border-radius); background-color: white; font-size: 95%;">
<p style="text-align: center;">
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:<br/>
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
</div>
:::

## Members

It's looking a little quiet here...

{{ comp.list() }}

<br />

---

<small>This website is made with 💜 by [~hedy](https://home.hedy.dev/) with [Lume](https://lume.land/) and hand-crafted CSS.<br />View the source [here](https://github.com/hedyhli/meta-ring).</small>
