# 11ty-wisp

![11ty-wisp](11ty-wisp.jpg)

Building on what I learned from building 11ty gets tufte with tufte.css, I present 11ty wisp built from scratch.
Pun intended :)

Developer [Adam DJ Brett](https://adamdjbrett.com)

If you need help or want to consult about your project, don’t hesitate to contact me.

[info@adamdjbrett.com](mailto:info@adamdjbrett.com)
----
## Deploy to Cloudflare

`wrangler.jsonc` serves the Eleventy output (`_site`) as Cloudflare static assets.

### GitHub Actions (default)

`.github/workflows/deploy.yml` builds on every pull request and deploys pushes to `main`. Add two repository secrets under **Settings → Secrets and variables → Actions**:

| Secret | Where to get it |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens → Create Token, using the **Edit Cloudflare Workers** template |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → Account ID |

Pull requests only build, so a fork PR can never deploy or reach the secrets.

### Cloudflare's own build system (alternative)

Connect the repo in the dashboard instead of using Actions:

| | Workers Builds | Pages |
| --- | --- | --- |
| Build command | `npm run build` | `npm run build` |
| Output | `npx wrangler deploy` (deploy command) | `_site` (build output directory) |

### From your machine

`npm run deploy` builds and runs `wrangler deploy`; `npm run preview` serves the built site locally through Workers. Both call `npx wrangler`, which fetches wrangler on demand. To pin it instead, run `npm i -D wrangler` and commit the updated `package-lock.json` — CI already pins the major through the action's `wranglerVersion`.

### Notes

The Node version comes from `.nvmrc` (24), which matches `engines.node` in `package.json`. Cloudflare's build image and `actions/setup-node` both read `.nvmrc`, so keep it in sync with `engines`. Response headers live in `public/_headers`, copied to the root of `_site` during the build.

----
## CHANGELOG
* Make the header match the background color like on [eddy](https://eddy.000000076.xyz/) - fix
* show a subtitle in *italics* under the title - fix
* Move the next and previous buttons for posts to from the header to down below - fix
* remove unused CSS - fix
* enable minify CSS, JS, and text compression - fix
* tab focus select needs to be more visible - fix we can change color on metadata
* add a disclaimer notice box as a styling option. - fix we can change color on metadata

----

## Mobile Peform

![Mobile](mobile.png)

---

## Desktop Peform

![Desktop](desktop.png)

---

## Features
+ Build Awesome (Eleventy)
+ Blades CSS
+ Home page
+ Static Page
+ Search Pagefind
+ Documentation List
+ Documentation Post
+ Pagination Docs
+ Blog List
+ Blog Post
+ Pagination Post
+ Pagination Blog
+ Blockquote Full Width
+ Blockquote Small
+ Side Note Default
+ Side Note with Blockquote
+ Side Note with Image
+ Side Note with Video
+ Side Note with Link
+ Side Note Numeric Default
+ Side Note Numeric with Blockquote
+ Side Note Numeric with Image
+ Side Note Numeric with Video
+ Side Note Numeric with Link
+ Side Note Numeric Link ID Default
+ Side Note Numeric Link ID with Blockquote
+ Side Note Numeric Link ID with Image
+ Side Note Numeric Link ID with Video
+ Side Note Numeric Link ID with Link
+ Full Width Card
+ Small Card
+ Full Width Image
+ Small Image
+ Full Width Video
+ Small Video
+ Yaml Data
+ Tags List
+ Tags Page Detail
+ Dark Mode
+ Light Mode
+ Auto Mode
+ Minify CSS , JS
+ Minify Text Brotli
+ And More..
