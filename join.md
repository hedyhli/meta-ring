---
title: "Join Meta Ring"
templateEngine: [vento, md]
---

# Join the [Meta Ring](/)

## Rules

<ol>
  <li>

    Your site should not contain highly inappropriate, illegal, or immoral
    content, including pornographic, excessively NSFW, or similar material.
    Content warnings must be clearly visible.
  </li>

  <li>

    This webring focuses on **personal websites**. This means organization and
    project home pages will not be accepted.

    It's great to know about the technology behind your project sites, but the
    purpose of this webring is to encourage unique personal sites, the joy of
    exploration and tinkering with technology, reflecting it in your personal
    site, and sharing it with the world.
  </li>
</ol>

## Webring code

The link to [the webring homepage](/), and the [**previous**](/previous) and
[**next**](/next) links should be added to your site before you join.
You can omit the [random](/random) link if you like.

Here's an example:

:::
<div style="border: var(--border-width) solid var(--border); padding: 1rem 0; border-radius: var(--border-radius); background-color: var(--code-bg); font-size: 95%;">
<p style="text-align: center;">
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:<br/>
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
</div>
:::

```html
<p style="text-align: center;">
  This site is part of the <a href="https://meta-ring.hedy.dev/">Meta Ring</a>:<br/>
  [<a href="https://meta-ring.hedy.dev/previous">← Previous</a>]
  [<a href="https://meta-ring.hedy.dev/random">Random</a>]
  [<a href="https://meta-ring.hedy.dev/next">Next →</a>]
</p>
```

Note that these links do not execute JavaScript client-side.

<br />

<hr />

All set? Join us by filling this form. If all is well you'll be notified
via email that you have been added to the webring.

<br />

{{ comp.form() }}
