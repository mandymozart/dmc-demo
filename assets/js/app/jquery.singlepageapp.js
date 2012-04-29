/*
| JQuery Plugin
| Single Page App 
| Comes with statusbar, automatic resizing, 
| requires jquery.tableofcontent.js
*/

/* Functions */
// Reset Screen
// needs to be called everytime a Ajax call changes container div's in Size
function resetScreen(){
    var footer_h = $('.footer').height();
    var section_h = $('#menu').height()+$('#folders-wrapper').height();
    var window_h = $(window).height();

    var display_h = window_h - section_h - footer_h;
    $('#iframe').height(display_h);
    $('iframe').height(display_h);
    status('window_h ' + window_h + ' - section_h ' + section_h + '/' + $('#iframe').offset().top + ' - footer_h ' + footer_h + ' = display ' + display_h)

}

// RESIZING MICROSITE
/*
var section_p = $('.releases-header').height()+$('.history-header').height()+$('.divider').height(); //section padding (sum of history-header, library-header, divider
var offset = $('#display').offset();
var window_h = $(window).height();
var display_h = (window_h - offset.top - footer_h)-section_p;
var section_h = (display_h/2);
$('#releases').height(section_h);
$('#history').height(section_h);
*/

// resize
$(window).resize(function(){
    resetScreen();
    status('resized');
});

// dom ready
$(document).ready(function(){
    resetScreen();

    // bind overscroll to scrollable regions (replace with data-overscroll="auto/toggle/hidden")
    //$('#releases').overscroll();
    //$('#history').overscroll();
});

/* HELPER */

// TOC of source to target
function loadToc(source,target){
    $(source).tableOfContents(
        $(target),
        {
            startLevel: 1,    // H1 and up
            depth:      6    // H6
        }
    );
}

// Status output to status bar
function status(msg){
    $('#status').text(msg);
}

