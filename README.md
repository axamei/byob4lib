# BYOB: Build Your Own Bootstrap

## Presentation

Bootstrap is awesome! It allows for quick and easy front-end development
without demanding too much time with the design of the user interface. A
framework like Bootstrap can also help libraries address one of our top
usability problems: wild inconsistency of styles and layouts across our
own in-house applications and websites.

However, what if you do not want to compromise your creativity and make
your project visually stand out? With enough Sass or Less knowledge it
is possible to highly customize Bootstrap to fit your needs, but in the
end you still end up with your design and code buying into Bootstrap's
markup and design conventions, which are not always what you want.
Sometimes you simply want to start with a clean slate and not fight the
framework and use only the components and features you need.

In that case, build your own Bootstrap! In this talk we will discuss
techniques for using some of the emerging tools from the front-end
development and design communities to create a maintainable, modular
in-house Sass toolkit that we are implementing within a variety of tools
including Drupal, Rails applications, in house PHP applications, as well
as within vendor solutions like Libguides and ILLiad. Some specific
tools we will discuss are Grunt, Bower, and Sass tools like Singularity,
Breakpoint, and Bourbon.


Available via http://axapu.github.io/byob4lib/slides/

## Resources

###Useful tools:
CSS Stats - [http://cssstats.com/](http://cssstats.com/) 

Sache - [http://www.sache.in/](http://www.sache.in/)

Grunt Plugins - [http://gruntjs.com/plugins](http://gruntjs.com/plugins) 

###Playgrounds:
CodePen - [http://codepen.io/](http://codepen.io/)

SassMeister - [http://sassmeister.com/](http://sassmeister.com/)

###Grid Systems:
Flint - [http://flint.gs/](http://flint.gs/)

Jeet - [http://jeet.gs/](http://jeet.gs/)

Neat - [http://neat.bourbon.io](http://neat.bourbon.io)

Singularity - [http://singularity.gs](http://singularity.gs)

Susy - [http://susy.oddbird.net/](http://susy.oddbird.net/)

Toolkit (Responsive Web Design Mixin Library) - [https://github.com/at-import/toolkit](https://github.com/at-import/toolkit)

###Sass tools (mentioned in our talk) that can be used to replace Bootstrap:
Compass - http://compass-style.org/

Bourbon - http://bourbon.io 

Neat - http://neat.bourbon.io/

Bitters - http://bitters.bourbon.io

Refills - http://refills.bourbon.io 

Singularity - http://singularity.gs 

Breakpoint - http://breakpoint-sass.com/ 

###Articles/Presentations about Sass
http://alistapart.com/article/dry-ing-out-your-sass-mixins 

http://snugug.github.io/responsive-grids/#/


###Useful Sass resources (documentation, books, blogs, listservs)
Documentation: http://sass-lang.com/documentation/file.SASS_REFERENCE.html

SassConf - http://sassconf.com 

Scalable and Modular Architecture for CSS - https://smacss.com/ 

The Sass Way http://thesassway.com/

### Why Sass?
Transitioning to SCSSS at Scale (ETSY)- https://codeascraft.com/2015/02/02/transitioning-to-scss-at-scale/

### Princeton University Library Sites Using this Methodology
Library Base Drupal Theme - https://github.com/pulibrary/pul_base (implemented using Drupal's Omega [4] theme https://www.drupal.org/project/omega)

Example Sites:
* http://library.princeton.edu/
* http://rbsc.princeton.edu/versailles
* http://libguides.princeton.edu


### Thoughts on Maintainable CSS
CSS Architecture for Drupal 8 - https://www.drupal.org/node/1887918

SMACSS - https://smacss.com/book/

### Libsass C/C++ Implementation of a Sass Compilier
Libsass - http://libsass.org/ (no more ruby dependency)

Why LibSass? http://sass-lang.com/libsass  


###Haters gonna hate
http://snugug.github.io/winning-the-web/ 

http://notes.gross.is/post/43508972396/please-stop-using-twitter-bootstrap 

http://fourword.fourkitchens.com/article/you-dont-need-bootstrap 

##Sources for presentation
Slide 1 - https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/cff5aac1e087caa046569b8054f5ba3f/tumblr_n031k8OAM31tqxqa3o1_500.png

Slide 3 - http://paypal.github.io/bootstrap-accessibility-plugin/

Slide 4 - http://www.zingdesign.com/5-reasons-not-to-use-twitter-bootstrap/

Slide 4 - http://notes.gross.is/post/43508972396/please-stop-using-twitter-bootstrap

Slide 6 - https://www.drupal.org/files/druplicon.vector.svg

Slide 6 - http://www.moreclickmarketing.co.uk/blog/wp-content/uploads/2011/09/elephpant-elephant-php-logo.png

Slide 6 - http://www.999globalsoft.com/sites/all/themes/global/images/Ruby_on_Rails-logo.png

Slide 6 - http://benpalmer.me/wp-content/themes/benpalmer/assets/images/wordpress-logo.png

Slide 6 - http://springshare.com/

Slide 6 - http://www.atlas-sys.com/

Slide 9 - http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/

Slide 9 - http://www.bennpearson.co.uk/public/img/info/sass.svg

Slide 12 - http://bourbon.io/

Slide 12 - http://neat.bourbon.io/

Slide 12 - http://bitters.bourbon.io/

Slide 12 - http://refills.bourbon.io/

Slide 12 - http://singularity.gs/

Slide 12 - http://breakpoint-sass.com/

Slide 13 - http://refills.bourbon.io/

Slide 14 - http://snugug.github.io/responsive-grids/#/

Slide 14 - http://i.stack.imgur.com/JSxrA.png

Slide 15 - http://snugug.github.io/responsive-grids/#/

Slide 16 - http://breakpoint-sass.com/

Slide 17 - http://snugug.github.io/responsive-grids/#/

Slide 18 - http://snugug.github.io/responsive-grids/#/

Slide 19 - http://conf.rollingscopes.com/images/workshops/54a54071.nodejs.png

Slide 19 - http://vps.rethinkops.com/config/web-hosting/css/img/icon-ruby.png

Slide 19 - http://gruntjs.com/img/grunt-logo-no-wordmark.svg

Slide 19 - https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67

Slide 19 - https://github.com/bundler/bundler

Slide 20 - http://cssstats.com/

Slide 21 - https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/cff5aac1e087caa046569b8054f5ba3f/tumblr_n031k8OAM31tqxqa3o1_500.png

Slide 22 - http://images.rapgenius.com/2e93430bbc03a10e18d02b5200bd5a22.417x413x3.gif
