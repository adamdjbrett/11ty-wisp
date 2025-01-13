---
title: Get Start
description: Getting Started with 11ty WISP
---
### Node Download

Need to download Node Js , [Download Node Here](https://nodejs.org/en/download)

Download Source Code Project - [Download 11ty WISP](https://github.com/adamdjbrett/11ty-wisp/archive/refs/heads/main.zip)

or Clone / Fork this Projects `git clone https://github.com/adamdjbrett/11ty-gets-tufte.git`

### Run 11ty WISP

Open your download folder and extract in to your project folder, open terminal and run this command `npm install`

Next you can run this project on your local devices , run this command `npm start`

Now you can open `http://localhost:8080` on your web browser.

### Configuration

For the initial setup, go to `_data/metadata.yaml`

Then set it according to your needs, such as title, description, and others.

Next, after making the settings, you are now ready to update your site.

### Home Page

To update the main page, go to `content/index.md` and change it to suit your needs.

### Static Page

To create a static page, you can access content/page and create a new markdown file there, for example privacy.md then create a frontmatter with the concept as below.

```
---
title: This is my title
description: My description in here...
---
Write your content article.......
```

### Blog Dynamic Page 

To create a dynamic page, for example a blog article, access content/blog and create a new markdown file there, for example this-is-article.md then create a frontmatter with the following concept:

```
---
title: This is my title
description: My description in here...
date: 2025-01-09
tags: 
 - hello
 - world
---
Write your content article.......
```

