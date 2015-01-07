=== Plugin Name ===

Contributors: Aryan Duntley, dunar21

Plugin Name: WPR Halloween Scare Popup

Donate link: http://worldpressrevolution.com/wpr_myplugins/wpr-wordpress-halloween-scare-plugin/

Plugin URI: http://wordpress.org/extend/plugins/

Author URI: http://worldpressrevolution.com/ 

Tags: halloween plugin, halloween theme, scary plugin

Requires at least: 3.0.1

Tested up to: 4.1

Stable tag: 1.6

License: GPLv2 or later

License URI: http://www.gnu.org/licenses/gpl-2.0.html



Creates a scary, staticy Halloween popup.



== Description ==

NOTE:  This plugin was developed for tutorial purposes with [WorldPress Revolution's](http://worldpressrevolution.com/creating-scary-halloween-popup/ "WorldPress Revolution Wordpress Tutorials") Scary Halloween pop up tutorial.  This plugin will not be supported or updated.  It is free for any/all to use, customize or do with as they please.  Enjoy.


This plugin creates a shortcode that when called, enqueues a javascript file that generates a popup that mimics a white noise tv static and then displays a scary, Halloween themed image/gif part way through the duration of the effect.  

Plugin site: [WorldpressRevolution](http://worldpressrevolution.com/wpr_myplugins/wpr-wordpress-halloween-scare-plugin/ "Aryan Duntley's Worldpress Revolution wordpress tutorials")


Demo: [See Demo](http://republicofus.com/halloween-scare/ "Aryan Duntley's WPR Halloween Scare Demo")



== Installation ==



1. Upload `wpr-halloween-scare` folder to the `/wp-content/plugins/` directory

2. Activate the plugin through the 'Plugins' menu in WordPress

3. Use shortcode: [wprscare]

4. Attribute "page" defines whether you want to specify a page/post type conditional.  Available values are (home-default, home-static, blog, single, page, page-template), default is none and effect occurs when shortcode is called.

5. Attribute "pagevalue" defines the type relative to the conditional above.  Available values are the post id, slug or title relative to the "page" type conditional.


6. Attribute "beginin" defines how many seconds to wait before effect takes place.  Default is 3.

7. Attribute "imwidth" is available only if you use a custom gif or image in place of the gif used in the imgs folder of this plugin.  You can replace it with any image you want (as long as you provide the same name).  If you do so, you must supply the image width in order for it to display correctly and in the correct location relative to the screen width.


8. Attribute "imheight" is available only if you use a custom gif or image in place of the gif used in the imgs folder of this plugin.  You can replace it with any image you want (as long as you provide the same name).  If you do so, you must supply the image height in order for it to display correctly and in the correct location relative to the screen height.

9. Attribute "endafter" defines when, in seconds, you want the animation to end.  By default the value is set to 0 and the effect ends when the audio end event listener is called.  However, with many mobile devices, audio is only available upon user action.  I did not script this to take all of that audio on mobile nonsense, so in order to overcome the problem, you may define an endafter parameter so the effect is removed in mobile devices.



== Screenshots ==



1. That's all.





== Changelog ==

= 1.0 =

* Only version.



