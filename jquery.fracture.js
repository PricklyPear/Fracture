//initiates "Fracture." Make sure the jQuery library is loaded first.

jQuery(document).ready(function($) {
$('.frac').each(function (key, value) {
 var split = $(this).html().split("/");
 if (split.length == 2) {
 $(this).html('<sup>' + split[0] + '</sup><span class="fracSlash">' + '&frasl;' + '</span><span class="lastN">' + split[1] + '</span>');
 }
});
});
