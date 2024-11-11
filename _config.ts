import lume from "lume/mod.ts";

import check_urls from "lume/plugins/check_urls.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import toc, { linkInsideHeader } from "https://deno.land/x/lume_markdown_plugins@v0.7.1/toc.ts";

import passthrough from "./passthrough.mjs";

const site = lume({
    location: new URL("https://meta-ring.hedy.dev"),
    includes: "_templates",
});

site.use(check_urls());
site.use(metas());
site.use(sitemap());
site.use(toc({ anchor(slug: string, state: any, i: number) {
  const linkOpen = new state.Token("link_open", "a", 1);
  linkOpen.attrSet("href", `#${slug}`);
  linkOpen.attrSet("aria-hidden", "true");

  const linkText = new state.Token("html_inline", "", 0);
  linkText.content = state.tokens[i].markup;
  linkText.meta = { isPermalinkSymbol: true };

  const linkTokens = [
    linkOpen,
    linkText,
    new state.Token("link_close", "a", -1),
  ];

  const space = new state.Token("text", "", 0);
  space.content = " ";
  state.tokens[i + 1].children.unshift(...linkTokens, space);
} }));

site.hooks.addMarkdownItPlugin(passthrough, {});

site.copy("static", ".");
site.ignore("README.md");

export default site;
