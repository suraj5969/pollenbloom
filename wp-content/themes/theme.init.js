function beelove_theme_init_post_formats(){"use strict";jQuery('a.tribe-events-read-more,.tribe-events-button,.tribe-events-nav-previous a,.tribe-events-nav-next a,.tribe-events-widget-link a,.tribe-events-viewmore a').addClass('sc_button sc_button_style_filled');if(BEELOVE_STORAGE['button_hover']&&BEELOVE_STORAGE['button_hover']!='default'){jQuery('button:not(.search_submit):not([class*="sc_button_hover_"]),\
				.sc_button:not(.sc_button_style_border):not([class*="sc_button_hover_"]),\
				.woocommerce .button:not([class*="sc_button_hover_"]),.woocommerce-page .button:not([class*="sc_button_hover_"]),\
				#buddypress a.button:not([class*="sc_button_hover_"])').addClass('sc_button_hover_'+BEELOVE_STORAGE['button_hover']);if(BEELOVE_STORAGE['button_hover']!='arrow')
jQuery('input[type="submit"]:not([class*="sc_button_hover_"]),\
					input[type="button"]:not([class*="sc_button_hover_"]),\
					.isotope_filters_button,\
					.scroll_to_top:not([class*="sc_button_hover_"]),\
					.sc_slider_prev:not([class*="sc_button_hover_"]),.sc_slider_next:not([class*="sc_button_hover_"]),\
					.tagcloud > a:not([class*="sc_button_hover_"])').addClass('sc_button_hover_'+BEELOVE_STORAGE['button_hover']);}
jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').each(function(){if(jQuery(this).val()!='')
jQuery(this).addClass('filled');else
jQuery(this).removeClass('filled');});jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').on('blur',function(){if(jQuery(this).val()!='')
jQuery(this).addClass('filled');else
jQuery(this).removeClass('filled');});}
function beelove_theme_googlemap_styles($styles){"use strict";$styles['greyscale']=[{"stylers":[{"saturation":-100}]}];$styles['inverse']=[{"stylers":[{"invert_lightness":true},{"visibility":"on"}]}];$styles['simple']=[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#727272"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"gamma":"1"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"all","stylers":[{"gamma":"1"},{"lightness":"0"},{"saturation":"0"},{"weight":"1"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":"27"}]},{"featureType":"poi","elementType":"all","stylers":[{"weight":"1"},{"gamma":"1"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":"22"}]},{"featureType":"road","elementType":"all","stylers":[{"gamma":"1"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"all","stylers":[{"gamma":"1"},{"lightness":"0"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#f8b742"},{"lightness":"0"},{"weight":"1"},{"gamma":"1"}]}];$styles['apple']=[{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];return $styles;}