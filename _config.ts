import lume from "lume/mod.ts";
import check_urls from "lume/plugins/check_urls.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";

import passthrough from "./passthrough.mjs";

const site = lume({
    location: new URL("https://meta-ring.hedy.dev"),
    includes: "_templates",
});

site.use(check_urls());
site.use(metas());
site.use(sitemap());

site.hooks.addMarkdownItPlugin(passthrough, {});

export default site;
