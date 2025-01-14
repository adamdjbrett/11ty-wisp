---
title: Side Notes with ID Number
description: How to use Side Notes with ID Number 11ty WISP
---
### Side Notes ID Default

Display

{% sidenotesid  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" %}

Implementation

{% pc 'sidenotesid "Text Body in here...", "Side Notes Text"' %}

Example

{% pc 'sidenotesid  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Exmaple of side notes"' %}

### Side Notes with Link

Display

{% sidenotesidlink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev" %}

Implementation

{% pc 'sidenotesidlink "Text Body in here...", "Side Notes Text" , "text link", "URL Link"' %}

Example

{% pc 'sidenotesidlink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes with BlockQuote

Display

{% sidenotesidblockquote  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "Example side notes with blockquote" , "Adam DJ Brett" %}

Implementation

{% pc 'sidenotesidblockquote "Text Body in here...", "text blockquote", "Blockquote Footer"' %}

Example

{% pc 'sidenotesidlink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "click me" , "https://www.11ty.dev"' %}

### Side Notes with Image

Display

{% sidenotesidimage  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" ,"https://images.unsplash.com/photo-1736164446087-cb6a49da51ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Example side notes with image" %}

Implementation

{% pc 'sidenotesidimage "text sidenotesid", "URL Image here.." , "Text Body in here..."' %}

Example

{% pc 'sidenotesidimage  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "Example side notes with image"' %}

### Side Notes + Image +  Link

Display

{% sidenotesidimagelink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example of side notes" , "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesidimage "Text Body in here...", "text sidenotesid", "URL Image here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesidimagelink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}


### Side Notes with Video

Display

{% sidenotesidvideo  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE" %}

Implementation

{% pc 'sidenotesidvideo "Text Body in here...", "text sidenotesid", "URL Video here.."' %}

Example

{% pc 'sidenotesidvideo  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with video", "https://www.youtube.com/embed/Q3t5lzvpBdE"' %}

### Side Notes + Video +  Link

Display

{% sidenotesidvideolink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.", "Example side notes with image and URL Link", "https://www.youtube.com/embed/hJGaMGmuZEc" , "click me" , "https://11ty.dev" %}

Implementation

{% pc 'sidenotesidvideolink "Text Body in here...", "text sidenotesid", "URL Video here.." , "text link" , "URL link here.."' %}

Example

{% pc 'sidenotesidvideolink  "Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.",  "Example side notes with image and URL Link" , "https://tufte.000000076.xyz/img/090-Subatomic%20Particles.png" , "click me" , "https://11ty.dev"' %}

