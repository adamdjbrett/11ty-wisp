---
title: Side Notes
description: How to use Side Notes with 11ty WISP
---
### Side Notes Default

Display

{% sidenotes  "Sed ultricies dolor non ante vulputate hendrerit Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas","Example of side notes" %}

Implementation

{% pc 'sidenotes "Text Body in here...", "Side Notes Text"' %}

Example

{% pc 'sidenotes  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Exmaple of side notes"' %}

### Side Notes with Link

Display

{% sidenoteslink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev" %}

Implementation

{% pc 'sidenoteslink "Text Body in here...", "Side Notes Text" , "text link", "URL Link"' %}

Example

{% pc 'sidenoteslink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes with BlockQuote

Display

{% sidenotesblockquote  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "Example side notes with blockquote" , "Adam Dj Brett" %}

Implementation

{% pc 'sidenotesblockquote "Text Body in here...", "text blockquote", "Blockquote Footer"' %}

Example

{% pc 'sidenoteslink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes with Image

Display

{% sidenotesimage  "Sed ultricies dolor non ante vulputate hendrerit Vivamus sit amet suscipit sapien Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" ,"https://images.unsplash.com/photo-1736164446087-cb6a49da51ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Example side notes with image" %}

Implementation

{% pc 'sidenotesimage "text sidenotes", "URL Image here.." , "Text Body in here..."' %}


### Side Notes + Image +  Link

Display

{% sidenotesimagelink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesimage "Text Body in here...", "text sidenotes", "URL Image here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesimagelink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}


### Side Notes with Video

Display

{% sidenotesvideo  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE" %}

Implementation

{% pc 'sidenotesvideo "Text Body in here...", "text sidenotes", "URL Video here.."' %}

Example

{% pc 'sidenotesvideo  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE"' %}

### Side Notes + Video +  Link

Display

{% sidenotesvideolink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with image and URL Link", "https://www.youtube.com/embed/hJGaMGmuZEc" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesvideolink "Text Body in here...", "text sidenotes", "URL Video here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesvideolink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}

