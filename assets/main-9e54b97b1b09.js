(function ($) {
jQuery(document).ready(function(){
    $('.main_slider').slick({
        dots: true,
        arrows: true
    });
		
	if($(".company_video").length) {
		$(".company_video iframe").height(
			$(".company_video iframe").width() / 16 * 9
		);
	}
	
	$('.main_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.main_slider .wow').removeClass('animated');
		$('.main_slider .wow').removeAttr('style');
		new WOW({boxClass: 'main_slider .wow'}).init();
	});
    
    $('.product_page_slider .container .product_page_slider_holder').slick({
        dots: true,
        arrows: true
    });
    
	$('.clients__slider').each(function(num, elem) {
        elem = $(elem);

		elem.slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [   
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						arrows: true
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: true
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true
					}
				}
			]
		});
	});
    
    $('.awards_slider .awards_slider_inner').slick({
        dots: true,
        arrows: true,
        responsive: [
			{
				breakpoint: 1280,
				settings: {
					arrows: false
				}
			}
		]
    });
	
	$(".choose_category").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#goods-categories_y").offset().top - 50
		}, 1000);
	});
    
});

jQuery(function() {$('.product').hover(
    function() {
        $('.product').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
        $(this).css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.product').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});

jQuery(function() {$('.news').hover(
    function() {
        $('.news').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
        $(this).css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.news').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});

jQuery(function() {$('.main_sub_silder_big').hover(
    function() {
        $('.main_sub_silder_big1').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.main_sub_silder_big1').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});

jQuery(function() {$('.main_sub_silder_norm.norm1').hover(
    function() {
        $('.main_sub_silder_norm1').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.main_sub_silder_norm1').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});

jQuery(function() {$('.main_sub_silder_norm.norm2').hover(
    function() {
        $('.main_sub_silder_norm2').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.main_sub_silder_norm2').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});

jQuery(function() {$('.abour_serts .sert').hover(
    function() {
        $('.abour_serts .sert').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
        $(this).css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    },
    function() {
        $('.abour_serts .sert').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
    });
});


jQuery(function($) {
    var position = 0;
    
    if ($(".color_set").length) {
        position = $(".color_set").position();
    }
    
    function fixDiv2() {
        if ($(".color_set").length) {
            if ($(window).scrollTop() > position.top)
                $(".color_set").css({'position': 'fixed'}).addClass('color_set_fixed');
            else
                $(".color_set").css({'position': 'absolute'}).removeClass('color_set_fixed');
        }
    }
    
    $(window).scroll(fixDiv2);
    $(window).resize(function() {
        position = $(".color_set").position();
        $(window).scroll(fixDiv2);
    });
	
    fixDiv2();

    function fixDiv() {
        if ($(window).scrollTop() > $('.fixed_slider').height())
            $(".press-centr_menu").css({'position': 'fixed','top': '0px'});
        else
            $(".press-centr_menu").css({'position': 'relative'});
    }
    
    $(window).scroll(fixDiv);
    $(window).resize(fixDiv);
    fixDiv();
    
    function fixDiv3() {
        if ($(window).scrollTop() > $('.mobile_top').position().top) {
            $(".mobile_top").css({'position': 'fixed'}).addClass('mobile_top_fixed');
		} else {
            $(".mobile_top").css({'position': 'absolute'}).removeClass('mobile_top_fixed');
		}
    }
    
    $(window).scroll(fixDiv3);
    $(window).resize(fixDiv3);
    fixDiv3();
	
	function fixDiv4() {
		if ($('#goods-categories_y').length) {
			if ($(window).scrollTop() + window.innerHeight > $('#goods-categories_y').position().top){
				$(".choose_category").hide();
			} else {
				$(".choose_category").show();
			}
		}
    }
    
    $(window).scroll(fixDiv4);
    $(window).resize(fixDiv4);
    fixDiv4();
    
});

    function mapInit(id, Latitude, Longitude) {
        var myOptions = {
            center: {lat: Latitude, lng: Longitude},
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        	styles: [ { "featureType": "administrative", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#0c0b0b" }, { "visibility": "on" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "saturation": "-7" }, { "lightness": "-3" }, { "weight": "0.01" }, { "color": "#e6e6e6" } ] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": "-100" }, { "lightness": "0" }, { "hue": "#ff0000" }, { "visibility": "simplified" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#686868" } ] }, { "featureType": "road", "elementType": "labels.text", "stylers": [ { "weight": "0.01" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#6e6e6e" }, { "weight": "10.00" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "lightness": "100" }, { "weight": "8.05" }, { "visibility": "on" }, { "color": "#e8e8e8" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" }, { "lightness": "0" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "lightness": "59" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#d4e4eb" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#f7f7f7" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9b7f7f" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#fef7f7" } ] } ]
        };
          
        var mapContainer = document.getElementById(id);

        // Google Maps создаёт и обновляет свои ссылки после инициализации карты.
        function updateMapLinks() {
            mapContainer.querySelectorAll('a[href]').forEach(function (link) {
                var url = new URL(link.href, window.location.href);
                if ((url.protocol === 'http:' || url.protocol === 'https:') &&
                        url.hostname !== window.location.hostname) {
                    link.relList.add('nofollow', 'noopener');
                    link.target = '_blank';
                }
            });
        }

        var mapLinksObserver = new MutationObserver(updateMapLinks);
        mapLinksObserver.observe(mapContainer, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['href']
        });
        var map = new google.maps.Map(mapContainer, myOptions);
        updateMapLinks();
        
        var myLatLng = {lat: Latitude, lng: Longitude};
        var image = (window.OFFLINE_ROOT+"assets/geotag-563ae9baaefb.svg");
          
        var marker = new google.maps.Marker({
        	position: myLatLng,
        	map: map,
        	title: 'ПРИОРИТЕТ',
        	icon: image
        });
    }
  
    jQuery(function() {
        function GetURLParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return sParameterName[1];
                }
            }
        }
        
        var curr_url_cat = GetURLParameter('cat_id');
        var curr_url_chassis_type = GetURLParameter('chassis_type');

        if (curr_url_cat > 0 || curr_url_cat == 'in_stock') {
            if (typeof curr_url_chassis_type !== 'undefined') {
                showCurCat(curr_url_cat, decodeURI(curr_url_chassis_type));
            } else {
                showCurCat(curr_url_cat, 0);
            }
        }
		
		var news_cat = GetURLParameter('catid');
		if (news_cat > 0) {
			$(".publications_menu a").removeClass("active");
			var news_cat_menu_sel = ".publications_menu a[data-catid=" + news_cat + "]";
			$(news_cat_menu_sel).addClass("active");
			
			$("a.news").each(function() {
				if ($(this).data("catid") == news_cat) {
					if($(this).is(":visible") == false) {
						$(this).show();
					}
				} else {
					if($(this).is(":visible")) {
						$(this).hide();
					}
				}
			});
		}
        
        $('.goods-categories-container .grid_category_item a').click(function(event) {
            if (this.getAttribute('href') !== '#') return;
            event.preventDefault();
            var curr_cat = $(this).parent(".grid_category_item").attr("data-cat");
            showCurCat(curr_cat, 0);
        });
        
        function showCurCat(curr_cat, curr_type) {
            $.ajax({
                type: "GET",
                url: window.wp_data.ajax_url,
                data: {
                    action : 'get_prods_by_cat',
                    cat_id : curr_cat,
                    curr_type : curr_type
                },
                success: function (response) {
                    if(response.length > 0) {
                        $('.main_products_grid__holder').html(response);
                        $('.grid_category_item').removeClass("active");
                        var seeeel = '.grid_category_item[data-cat=' + curr_cat + ']';
                        $(seeeel).addClass("active");
                        
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".main_products_grid__holder").offset().top
                        }, 1000);
                        
                        bindNew();
                    }
                }
            });
        }
        
        var hashTagActive = "";
        
        $(".press-centr_menu:not(.single_news_menu) a").on("click" , function (event) {
            event.preventDefault();
            
            if(hashTagActive != this.hash) {
                var dest = 0;
                
                if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                    dest = $(document).height() - $(window).height();
                } else {
                    dest = $(this.hash).offset().top;
                }

                $([document.documentElement, document.body]).animate({
                    scrollTop: dest
                }, 1000);
                hashTagActive = this.hash;
            }
        });
		
		$(".publications_menu a").on("click" , function (event) {
			event.preventDefault();
			var curr_cat = $(this).data("catid");
			var butt = $(".press_center_show_more");

			var data = {
				action: 'get_more_posts',
				limit: 9,
				offset: 0,
				cat: curr_cat
			};

			$.ajax({
				type: "GET",
				url: window.wp_data.ajax_url,
				data: data
			}).done(function(response) {
				$(".main_news_grid").html(response);
				if ($(response).filter('a').length < butt.data("limit")) {
					butt.hide();
				} else {
					butt.data("offset", 9);
					butt.data("cat", curr_cat);
					butt.show();
				}
			});
		});
        
        $('.radio_container input').click(function() {
            $curr_year = "date_info_" + $(this).siblings(".radio_date").html();
            $(".date_info .active").toggleClass('active');
            $("." + $curr_year).toggleClass('active');
        });
        
        $('a[href="#search-popup"]').magnificPopup({
            type: 'inline'
        });
        
        function syncQuoteContext() {
            var popup = $('#contacts-popup');
            popup.find('.quote-form__title').text(popup.find('[name="contact_form_1"]').val());
            popup.find('.quote-form__context').text(popup.find('[name="contact_form_2"]').val());
        }

        var popupLanguage = document.documentElement.lang.slice(0, 2);
        $('a[href="#contacts-popup"]').magnificPopup({
            type: 'inline',
            tClose: popupLanguage === 'ru' ? 'Закрыть (Esc)' : popupLanguage === 'es' ? 'Cerrar (Esc)' : 'Close (Esc)',
            callbacks: {
                open: function () {
                    // Остальные обработчики клика сначала задают тему заявки.
                    setTimeout(syncQuoteContext, 0);
                }
            }
        });

        $('#contacts-popup').on('change', 'input[type="file"]', function () {
            var label = $(this).closest('.quote-form__file').find('.quote-form__filename');
            label.text(this.files.length ? this.files[0].name : label.attr('data-empty'));
        });
        $('#contacts-popup form').on('reset', function () {
            var form = $(this);
            var subject = form.find('[name="contact_form_1"]').val();
            var context = form.find('[name="contact_form_2"]').val();
            setTimeout(function () {
                form.find('[name="contact_form_1"]').val(subject);
                form.find('[name="contact_form_2"]').val(context);
                form.find('.quote-form__filename').each(function () {
                    $(this).text($(this).attr('data-empty'));
                });
                syncQuoteContext();
            }, 0);
        });
        
		var curr_lang = $('.main_menu_lang a.active').html();
			
        $('.guarantee_slider a[href="#contacts-popup"], .guarantee_get a[href="#contacts-popup"]').on('click', guar_get);
        $('a[href="#contacts-popup"]').has('.kp').on('click', guar_get);
        
        function guar_get() {
			if (curr_lang == "rus"){
				$("input[name='contact_form_1']").val("Получить коммерческое предложение");
			} else if (curr_lang == "eng") {
				$("input[name='contact_form_1']").val("Get a commercial offer");
			}
            var productName = $('.product__name').text().trim();
            if (productName) {
                $("input[name='contact_form_2']").val(productName);
            }
        }
        
        $('.guarantee_get_block a[href="#contacts-popup"]').click(function() {
			if (curr_lang == "rus"){
				$("input[name='contact_form_1']").val("Гарантия");
            	$("input[name='contact_form_2']").val("Заявка на сервис");
			} else if (curr_lang == "eng") {
				$("input[name='contact_form_1']").val("Warranty");
            	$("input[name='contact_form_2']").val("Request for service");
			}
        });
		
		$('.trucking_block a[href="#contacts-popup"]').click(function() {
			$("input[name='contact_form_1']").val("Перевозка негабаритных и тяжеловесных грузов");
           	$("input[name='contact_form_2']").val("Заявка на перевозку тралом");
        });
		
		$('.trucking_block0 a[href="#contacts-popup"]').click(function() {
			$("input[name='contact_form_1']").val("Перевозка негабаритных и тяжеловесных грузов");
           	$("input[name='contact_form_2']").val("Заявка на перевозку фурой");
        });
		
        $('.leasing_block a[href="#contacts-popup"]').click(function() {
			if (curr_lang == "rus"){
				$("input[name='contact_form_1']").val("Лизинг");
				$("input[name='contact_form_2']").val("Заявка на расчёт");
				$("textarea[name='your-message']").val("Здравствуйте! Прошу рассчитать условия лизинга общей суммой " + $('.leasing_sum_p').html() + " с первоначальным взносом " + $('.leasing_contribution_p').html() + " на срок " + $('.leasing_term_p').html() + ".");
			} else if (curr_lang == "eng") {
				$("input[name='contact_form_1']").val("Leasing");
				$("input[name='contact_form_2']").val("Application for calculation");
				$("textarea[name='your-message']").val("Hello! Please calculate the leasing terms with the total amount " + $('.leasing_sum_p').html() + " with the initial payment " + $('.leasing_contribution_p').html() + " for the term " + $('.leasing_term_p').html() + ".");
			}
            
        });
        
        $('a.contacts_join').click(function() {
            $("input[name='contact_form_1']").val($(this).children(".light").html());
            $("input[name='contact_form_2']").val($(this).children(".regular").html());
        });
        
        if ($("#map").length && window.google && window.google.maps) {
            mapInit("map", 55.024845, 60.1331083);
        }
        
        var show = true;
        var countbox = ".big_numbers";
        $('.big_numbers .gold').css('opacity', '0');
        
        $(window).on("scroll load resize", function () {
            if ($(countbox).length) {
                if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
                var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
                var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
                var w_height = $(window).height(); // Высота окна браузера
                var d_height = $(document).height(); // Высота всего документа
                var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
                if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $('.big_numbers .gold').css('opacity', '1');
                    $(".big_numbers .gold").spincrement({
                        thousandSeparator: "",
                        duration: 1200
                    });
                     
                    show = false;
                }
                
            }
        });

		var hhh0 = $('.awards.clients .container').height() - $('.awards.clients .show_more').height();
		
		function fixAwards() {
			hhh0 = $('.awards.clients .container').height() - $('.awards.clients .show_more').height();
			if ($( window ).width() < 760) {
				$('.awards.clients .client').slice(2).hide();
			} else if ($( window ).width() < 1000) {
				$('.awards.clients .client').slice(3).hide();            
			} else {
				$('.awards.clients .client').slice(5).hide();    
			}

			$('.awards.clients .container').css('height', $('.awards.clients .container').height());
			$('.awards.clients .container').css('overflow', 'hidden');
		}
		
		if ($('.awards.clients .container').height() < 600) {
			setTimeout(fixAwards, 2000);
		} else {
			fixAwards();
		}
		
        $('.awards .show_more a').click(function () {
            event.preventDefault();
            $(".awards .client").show();
            $( ".awards.clients .container" ).animate({
                height: hhh0
              }, 2000);
            $(this).hide();
        });
        
        $('.partners_logos_block .partners_logo_partner').slice(1).hide();
        $('.partners .partners_text_partner').slice(1).hide();
        
        $('.partners_logos a').click(function () {
            event.preventDefault();
            var cur_partners_name = $(this).children('img').attr('class');
            if (cur_partners_name.indexOf("partners_logos_active") == -1) {
                $('.partners_logos img.partners_logos_active').removeClass("partners_logos_active");
                $(this).children('img').addClass("partners_logos_active");
                $(".partners_logo_partner").hide();
                $(".partners_text_partner").hide();
                var partners_logo_partner = ".partners_logo_partner_" + cur_partners_name;
                var partners_text_partner = ".partners_text_partner_" + cur_partners_name;
                $(partners_logo_partner).show();
                $(partners_text_partner).show();
            }
        });
        
        function abc2(n) {
            n += "";
            n = new Array(4 - n.length % 3).join("U") + n;
            return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        }
        
        $('.partners.leasing input[type=range]').on('input', function () {
            var pppp = $(this).width() * $(this).val() / 100;
            var pppp_val = $(this).val() / 100;
            var pppp_name = "." + $(this).attr("id") + "_p";
            if (pppp_name == ".leasing_sum_p") {
                $(pppp_name).html(abc2(1000000 + 30000000 * pppp_val) + " ₽");
            } else if (pppp_name == ".leasing_contribution_p") {
                $(pppp_name).html(10 + Math.round (80 * pppp_val) + " %");
            } else if (pppp_name == ".leasing_term_p") {
				if (curr_lang == "rus"){
					$(pppp_name).html(6 + Math.round (54 * pppp_val) + " месяцев");
				} else if (curr_lang == "eng") {
					$(pppp_name).html(6 + Math.round (54 * pppp_val) + " months");
				}
            }
            var pppp_name_width = $(pppp_name).width();
            if (pppp_name_width / 2 < pppp && $(this).width() > pppp_name_width / 2 + pppp) {
                $(pppp_name).css("padding-left", pppp - pppp_name_width / 2);
            }
            
        });
        
        $(document).on({
            mouseenter: function() {
                $('.main_menu_front_page .main_menu_urls a').css('opacity', '0.35');
                $(this).css('opacity', '1');
            },
            mouseleave: function() {
                $('.main_menu_front_page .main_menu_urls a').css('opacity', '1');
            }
        }, ".main_menu_front_page .main_menu_urls a");
        
        var qqqiii;
        
        $(".cmn-toggle-switch").on( "click", function(e) {
            e.preventDefault();
            if (this.classList.contains("active") === true) {
                this.classList.remove("active");
                $('.main_menu').hide();
                $('.main_menu_mobile_back').hide();
                $('.mobile_top_inner a').css('visibility', 'visible');
                $('.mobile_top_inner p').show();
                $(".mobile_top").removeClass('mobile_top_fixed_transp');
                $(".mobile_top").css("width", "100%");
            } else {
                this.classList.add("active");
                $('.main_menu').show();
                $('.main_menu_mobile_back').show();
                $('.mobile_top_inner a').css('visibility', 'hidden');
                $('.mobile_top_inner p').hide();
                $(".mobile_top").addClass('mobile_top_fixed_transp');
                $(".mobile_top").css("width", "30%");
            }
        });
        
        if (window.simpleParallax) new simpleParallax($(".main_sub_silder_big1 img")[0], {scale: 1.2});
        if (window.simpleParallax) new simpleParallax($(".main_sub_silder_norm1 img")[0], {scale: 1.2});
        if (window.simpleParallax) new simpleParallax($(".main_sub_silder_norm2 img")[0], {scale: 1.2});
        if (window.simpleParallax) new simpleParallax($(".main_sub_silder_norm2 img")[0], {scale: 1.2});
        
        if (window.simpleParallax) new simpleParallax($(".big_img img")[0], {scale: 1.05});
        if (window.simpleParallax) new simpleParallax($(".big_img img")[1], {scale: 1.3});
        
        if (window.simpleParallax) new simpleParallax($(".big_img1 img")[0], {scale: 1.05});
        if (window.simpleParallax) new simpleParallax($(".big_img1 img")[1], {scale: 1.3});
        
        var topMenu = $(".press-centr_menu:not(.publications_menu)"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
        
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop() + topMenuHeight;
            
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop) return this;
            });

            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";

            menuItems.removeClass("active");
            menuItems.filter("[href='#"+id+"']").addClass("active");
        });
		
		$(".publications_menu a").on("click", function() {
			$(".publications_menu a").removeClass("active"); $(this).addClass("active"); 
		});
        
        $('.products_panel.products_panel_fixed .red svg').click(function() {
            if($('.prod_page_switch').is(":visible")){
                $(this).css('transform', 'rotate(0)');
                $('.prod_page_switch').hide();
            } else {
                $(this).css('transform', 'rotate(180deg)');
                $('.prod_page_switch').show();
            }
        });
        
        $('a.show_product_menu_url').click(function() {
            event.preventDefault();
            var self = this;
            if($('.chassis_type_select').is(":visible")){
                $(self).children('svg').css('transform', 'rotate(0)');
                $('.chassis_type_select').hide();
            } else {
                $(self).children('svg').css('transform', 'rotate(180deg)');
                var offset = $('a.show_product_menu_url').offset();	
                var topOffset = $('a.show_product_menu_url').offset().top;
            	$(".chassis_type_select").css({
                    top: (topOffset + 35)+ "px",
                    left: (offset.left) + "px",
                });
                $('.chassis_type_select').show();
            }
        });
        
        $(".timeline_background2").hide();
        $(".timeline_background3").hide();
        $(".timeline_background4").hide();
        $(".timeline_background5").hide();
        
        if($(".timeline").height() > 70) {
            $(".timeline_background2").show();
        }
        
        if($(".timeline").height() > 140) {
            $(".timeline_background3").show();
        }
        
        if($(".timeline").height() > 270) {
            $(".timeline_background4").show();
        }
        
        if($(".timeline").height() > 340) {
            $(".timeline_background5").show();
        }
		
		$('input[type=file]').change(function(e){
			$(".filename").html($(this).val().split('\\').pop());
		});

        function bindNew() {
			$('.prod_page_switch').hide();
			
			$('.products_panel.products_panel_fixed .red svg').click(function() {
				if($('.prod_page_switch').is(":visible")){
					$(this).css('transform', 'rotate(0)');
					$('.prod_page_switch').hide();
				} else {
					$(this).css('transform', 'rotate(180deg)');
					$('.prod_page_switch').show();
				}
			});
			
			$('.catalog_page_choose_car_menu .grid_category_item a').click(function(event) {
				if (this.getAttribute('href') !== '#') return;
				event.preventDefault();
				var curr_cat = $(this).parent(".grid_category_item").attr("data-cat");
				$('.products_panel.products_panel_fixed .red svg').css('transform', 'rotate(0)');
				$('.prod_page_switch').hide();
				showCurCat(curr_cat, 0);
			});
			
			$('a.catalog_page_filter').click(function() {
				event.preventDefault();
				var self = this;
				if($('.filter_line').is(":visible")){
					$('.filter_line').hide();
				} else {
					var topOffset = $('a.catalog_page_filter').offset().top;
					$(".filter_line").css({
						top: (topOffset + 35) + "px"
					});
					$('.filter_line').show();
				}
			});
			
            $('a.show_product_menu_url').click(function() {
                event.preventDefault();
                var self = this;
                if($('.chassis_type_select').is(":visible")){
                    $(self).children('svg').css('transform', 'rotate(0)');
                    $('.chassis_type_select').hide();
                } else {
                    $(self).children('svg').css('transform', 'rotate(180deg)');
                    var offset = $('a.show_product_menu_url').offset();	
                    var topOffset = $('a.show_product_menu_url').offset().top;
                	$(".chassis_type_select").css({
                        top: (topOffset + 35)+ "px",
                        left: (offset.left) + "px",
                    });
                    $('.chassis_type_select').show();
                }
            });
            
            $('.chassis_type_select a').click(function() {
                event.preventDefault();
                showCurCat($(this).attr("data-cat"), $(this).attr("data-type"));
            });
            
            jQuery(function() {$('.product').hover(
                function() {
                    $('.product').css({opacity: 0.35, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
                    $(this).css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
                },
                function() {
                    $('.product').css({opacity: 1, WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out', MsTransition: 'opacity 0.5s ease-in-out', OTransition: 'opacity 0.5s ease-in-out', transition: 'opacity 0.5s ease-in-out'});
                });
            });
            
            var position = 0;
    
            if ($(".color_set").length) {
                position = $(".color_set").position();
            }
            
            function fixDiv2() {
                if ($(".color_set").length) {
                    if ($(window).scrollTop() > position.top) {
                        $(".color_set").css({'position': 'fixed'}).addClass('color_set_fixed');
					} else {
                        $(".color_set").css({'position': 'absolute'}).removeClass('color_set_fixed');
						$('.products_panel.products_panel_fixed .red svg').css('transform', 'rotate(0)');
						$('.prod_page_switch').hide();
					}
                }
            }
            
            $(window).scroll(fixDiv2);
            $(window).resize(function() {
                position = $(".color_set").position();
                $(window).scroll(fixDiv2);
            });
            
            fixDiv2();

        }
    });

jQuery(document).ready(function() {
	let currentImage = 0;
	$(".customers_slider_negabarit").height(
		$(window).width() / 4
	);
	
	setInterval(
		function(){
			$(".customers_slider_negabarit img").eq(currentImage).fadeOut( "slow" );
			
			if (currentImage == 3) {
				currentImage = 0;
				$(".customers_slider_negabarit img").fadeIn("slow");
			} else {
				currentImage++;
			}
		},
		3500
	);
});

jQuery(".press_center_show_more").click(function(event){
	event.preventDefault();
	
	var butt = $(this);
	var data = {
		action: 'get_more_posts',
		limit: $(this).data("limit"),
		offset: $(this).data("offset"),
		cat: $(this).data("cat")
	};
		
	$.ajax({
		type: "GET",
		url: window.wp_data.ajax_url,
		data: data
	}).done(function(response) {
		$(".main_news_grid").append(response);
		if ($(response).filter('a').length < butt.data("limit")) {
			butt.hide();
		} else {
			butt.data("offset", butt.data("offset") + butt.data("limit"));
		}
	});
})
})(jQuery);
