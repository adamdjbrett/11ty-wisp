---
title: Side Notes with ID Link
description: How to use Side Notes with ID Number Link URL 11ty WISP
---
### Side Notes ID URL Default

Display

{% sidenotesidurl  "1a", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" %}

Implementation

{% pc 'sidenotesidurl "id", "Text Body in here...", "Side Notes Text"' %}

Example

{% pc 'sidenotesidurl  "1a", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Exmaple of side notes"' %}

### Side Notes ID URL with Link

Display

{% sidenotesidurllink  "1b", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev" %}

Implementation

{% pc 'sidenotesidurllink "id", "Text Body in here...", "Side Notes Text" , "text link", "URL Link"' %}

Example

{% pc 'sidenotesidurllink "1b", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes ID URL with BlockQuote

Display

{% sidenotesidurlblockquote "1c",  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "Example side notes with blockquote" , "Adam Dj Brett" %}

Implementation

{% pc 'sidenotesidurlblockquote "id", "Text Body in here...", "text blockquote", "Blockquote Footer"' %}

Example

{% pc 'sidenotesidurllink  "1c", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes ID URL with Image

Display

{% sidenotesidurlimage  "1d", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" ,"https://images.unsplash.com/photo-1736164446087-cb6a49da51ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Example side notes with image" %}

Implementation

{% pc 'sidenotesidurlimage "id", "text sidenotesidurl", "URL Image here.." , "Text Body in here..."' %}

Example

{% pc 'sidenotesidurlimage  "1d", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "Example side notes with image"' %}

### Side Notes ID URL + Image +  Link

Display

{% sidenotesidurlimagelink  "1e", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesidurlimage "id", "Text Body in here...", "text sidenotesidurl", "URL Image here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesidurlimagelink  "1a", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}


### Side Notes ID URL with Video

Display

{% sidenotesidurlvideo  "1f", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE" %}

Implementation

{% pc 'sidenotesidurlvideo "id", "Text Body in here...", "text sidenotesidurl", "URL Video here.."' %}

Example

{% pc 'sidenotesidurlvideo  "1f", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE"' %}

### Side Notes ID URL + Video +  Link

Display

{% sidenotesidurlvideolink  "1g", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with image and URL Link", "https://www.youtube.com/embed/hJGaMGmuZEc" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesidurlvideolink "id","Text Body in here...", "text sidenotesidurl", "URL Video here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesidurlvideolink  "1g", "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}

