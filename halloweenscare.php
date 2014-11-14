<?php
/*
Plugin Name: WPR Halloween Scare
Plugin URI: https://wordpress.org/plugins/wpr-halloween-scare-popup/
Description: Fun Halloween scare for your website.
Version: 1.0.5
Author: Aryan Duntley
Author URI: http://worldpressrevolution.com/wpr_myplugins/wpr-wordpress-halloween-scare-plugin/
License: GPLv2 or later 
*/
//http://www.videocopilot.net/tutorials/demon_face_warp/
function wpr_hs_addscripts(){
	if(!is_admin()){
		wp_register_script( 'wpr-hs-jas', plugins_url( 'js/wprhalloweenscare.js', __FILE__ ), array('jquery'));
		//wp_enqueue_script('wpr-hs-jas');

		$file_for_jav = admin_url('admin-ajax.php');
		$yuy = str_replace(array("http://", "https://"), "", site_url());
		
		$tran_arr = array('wpr_hs_imgs' =>  plugins_url( 'imgs/', __FILE__ ), 'wpr_hs_audio' =>  plugins_url( 'audio/', __FILE__ ), 'wpr_hs_custjax' => plugins_url( 'minejax.php', __FILE__ ), 'homepath' => $yuy);
		wp_localize_script( 'wpr-hs-jas', 'wprscare', $tran_arr );
	}
}
add_action('wp_enqueue_scripts', 'wpr_hs_addscripts');

add_shortcode('wprscare', 'hallscare');
function hallscare($atts = array(), $content = ''){
	$atts = shortcode_atts( array(
			'page' => '',//home-default, home-static, blog, single, page, page-template
			'pagevalue' => '',// post id, slug, title
			'beginin' => '3',
			'imwidth' => '400',
			'imheight' => '428',
			'endafter' => '0'
		), $atts );
	extract($atts);
		
		switch($page){
			case "home-default":
				if(is_front_page() && is_home()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}
			break;
			case "home-static":
				if(is_front_page() && !is_home()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}
			break;
			case "blog":
				if(is_home() && !is_front_page()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}
			break;
			case "single":
				if($pagevalue){	if(is_single($pagevalue)){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');} }
				else{if(is_single()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}}
			break;
			case "page":
				if($pagevalue){	if(is_page($pagevalue)){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');} }
				else{if(is_page()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}}
			break;
			case "page-template":
				if($pagevalue){	if(is_page_template($pagevalue)){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');} }
				else{if(is_page_template()){$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');}}
			break;
			default: 
				$a = scriptecho($atts);wp_enqueue_script('wpr-hs-jas');
		}
		return $a;
}
function scriptecho($atts){
//$fli = plugins_url( 'js/wprhalloweenscare.js', __FILE__ );
//jQuery.getScript( "$fli", function(data, textStatus, jqxhr){});
extract($atts);
$userip = $_SERVER['REMOTE_ADDR'];
$b = <<<WPRSCARE
<script type='text/javascript'>
/* <![CDATA[ */

var wprscarextra = {"wpr_hs_interval":"$beginin", "wpr_hs_imwidth":"$imwidth", "wpr_hs_imheight":"$imheight", "wpr_hs_timeout":"$endafter", "wpr_hs_userip":"$userip"};

/* ]]> */

/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 6)
  (function(f){
     window.setTimeout =f(window.setTimeout);
     window.setInterval =f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});
  @end
@*/

</script>

WPRSCARE;

return $b;
}

?>