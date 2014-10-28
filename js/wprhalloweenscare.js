var sg = new Image();
var st = new Image();
var sa = new Audio();
var imwide, imhite, lft, tpo;

jQuery(document).ready(function(){
	if(Cookies.get("WPRbeenScared") == "played"){return false;}
	
	Cookies.expire("WPRbeenScared");
	sg.src = wprscare.wpr_hs_imgs + "scarygirl.gif";
	st.src = wprscare.wpr_hs_imgs + "static.gif";
	sa.src = wprscare.wpr_hs_audio + "scaryhalloween.mp3";

	sa.preload = "auto"; 
	sa.play();
	sa.pause();   
	sa.load();
	
	jQuery("body").prepend('<div id="scarybox"><div id="understatic"></div><img id="doscary" src="' + wprscare.wpr_hs_imgs + 'OnebyOne.png" style="border:none;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;"/><div id="overstatic"></div><audio id="scarysound" autoplay preload="auto"><source src="' + st.src + '" type="audio/mpeg"></audio></div>');
	
	var tm = parseInt(wprscarextra.wpr_hs_interval, 10);
	var tmo = parseInt(wprscarextra.wpr_hs_timeout, 10);
	imwide = parseInt(wprscarextra.wpr_hs_imwidth, 10);
	imhite = parseInt(wprscarextra.wpr_hs_imheight, 10);
	var vs = viewportsize();
	if(tm == 0){tm = 1;}
	var tervalin = tm * 1000;
	var tervalout = tmo * 1000;
	lft = (screen.width * 0.5) - (imwide * 0.5);
	tpo = (vs.height * 0.5) - (imhite * 0.5);
	if(screen.width < imwide){lft = 0;}
	jQuery(window).load(function(){
		//if(isMobile()){initAudio();}
		st.onload = setTimeout(function(){doStatic();}, tervalin);
		//sa.onended = function(){jQuery(document).find("#scarybox").remove();}
		if(tmo){setTimeout(function(){jQuery(document).find("#scarybox").remove();}, tervalout);}
		else{sa.addEventListener('ended', function(){jQuery(document).find("#scarybox").remove();});}
		WPRcookieSet();
	});
})

/* Viewport Dimensions */
function viewportsize(){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	w = w ? w : screen.width;
	h = h ? h : screen.height;
	return {width : w, height: h };
}
function doStatic(){
	window.scrollTo(0,0);
	var stathigh = (screen.height > document.body.scrollHeight)?screen.height:document.body.scrollHeight;
	jQuery(document).find("#understatic, #overstatic").css({"background-image":"url(" + st.src + ")", "background-repeat":"repeat","position":"absolute","top":"0","left":"0","width":"100%","z-index":"19910"});
	jQuery(document).find("#overstatic").css({"opacity":"0.7", "z-index":"19930"});
	jQuery(document).find("#understatic, #overstatic").height(stathigh);
	
	playsound();
	setTimeout(function(){doScary();}, 4000);
}
function doScary(){
	jQuery(document).find("#doscary").css({"position":"absolute","top":tpo + "px","left":lft + "px","width":imwide + "px", "maxWidth":"100%", "height":imhite + "px","z-index":"19920", "opacity":"0.5"});
	jQuery(document).find("#doscary").attr("src", sg.src); 
}
function playsound(){
	sa.play();
}
function initAudio(){
    self.audio = sa;
    var startAudio = function(){
		self.audio.play();
		document.removeEventListener("touchstart", self.startAudio, false);
	}
    self.startAudio = startAudio;

    var pauseAudio = function(){
		self.audio.pause();
		self.audio.removeEventListener("play", self.pauseAudio, false);
	}
    self.pauseAudio = pauseAudio;

    document.addEventListener("touchstart", self.startAudio, false);
    self.audio.addEventListener("play", self.pauseAudio, false);
}
function WPRcookieSet(){
		Cookies.set('WPRbeenScared', "played", {path: "/", domain: wprscare.homepath, expires: '12/01/2015'});
		//Cookies.get(key)
		//Cookies.expire(key {path:"", domain:""})
		//Cookies.enabled (bool whether browser is allowing cookies)
		//Setting defaults:  Cookies.defaults = {path: '/', domain: "", expires: "", secure: true}; //secure https bool
}
function wprCookieGo(){
	Cookies.expire('WPRbeenScared', {path: "/", domain: wprscare.homepath})
	//document.cookie = "WPRbeenScared=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
}

function testScreenRote(){
	if(typeof window.orientation !== 'undefined'){return true;}
	return false;
}

function isMobile(){
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}

/*! Cookies.js - 0.4.0; Copyright (c) 2014, Scott Hamper; http://www.opensource.org/licenses/MIT */
(function(e){"use strict";var b=function(a,d,c){return 1===arguments.length?b.get(a):b.set(a,d,c)};b._document=document;b._navigator=navigator;b.defaults={path:"/"};b.get=function(a){b._cachedDocumentCookie!==b._document.cookie&&b._renewCache();return b._cache[a]};b.set=function(a,d,c){c=b._getExtendedOptions(c);c.expires=b._getExpiresDate(d===e?-1:c.expires);b._document.cookie=b._generateCookieString(a,d,c);return b};b.expire=function(a,d){return b.set(a,e,d)};b._getExtendedOptions=function(a){return{path:a&& a.path||b.defaults.path,domain:a&&a.domain||b.defaults.domain,expires:a&&a.expires||b.defaults.expires,secure:a&&a.secure!==e?a.secure:b.defaults.secure}};b._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())};b._getExpiresDate=function(a,d){d=d||new Date;switch(typeof a){case "number":a=new Date(d.getTime()+1E3*a);break;case "string":a=new Date(a)}if(a&&!b._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance"); return a};b._generateCookieString=function(a,b,c){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");b=(b+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};a=a+"="+b+(c.path?";path="+c.path:"");a+=c.domain?";domain="+c.domain:"";a+=c.expires?";expires="+c.expires.toUTCString():"";return a+=c.secure?";secure":""};b._getCookieObjectFromString=function(a){var d={};a=a?a.split("; "):[];for(var c=0;c<a.length;c++){var f=b._getKeyValuePairFromCookieString(a[c]); d[f.key]===e&&(d[f.key]=f.value)}return d};b._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("="),b=0>b?a.length:b;return{key:decodeURIComponent(a.substr(0,b)),value:decodeURIComponent(a.substr(b+1))}};b._renewCache=function(){b._cache=b._getCookieObjectFromString(b._document.cookie);b._cachedDocumentCookie=b._document.cookie};b._areEnabled=function(){var a="1"===b.set("cookies.js",1).get("cookies.js");b.expire("cookies.js");return a};b.enabled=b._areEnabled();"function"===typeof define&& define.amd?define(function(){return b}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports.Cookies=b):window.Cookies=b})();

