// JavaScript Document

var screenWidth = $(window).width();
var screenHeight = $(window).height();
var screenSize
var boxSize

if (screenWidth < screenHeight) {
	screenSize = screenWidth;
} else {
	screenSize = screenHeight;
}

boxSize = Math.floor(screenSize / 20);

screenSize = 20 * boxSize;

$("body").css("height",screenSize);
$("body").css("width",screenSize);

$(".ghostImage").css("height",boxSize);
$(".ghostImage").css("width",boxSize);

var bodyLeftMargin = parseInt($("body").css("marginLeft"));