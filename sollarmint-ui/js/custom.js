(function (a) {
    function G() {
        jQuery("header").addClass("clone", 1e3, "easeOutBounce");
        var b = a(document),
            c = jQuery("header.autoshow");
        50 <= b.scrollTop() ? (c.removeClass("scrollOff"), c.addClass("scrollOn"), c.css("height", "auto")) : (c.removeClass("scrollOn"), c.addClass("scrollOff"));
    }
    function H() {
     
      
        jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 });
        a(".image-popup").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function (b) {
                    return b.is("img") ? b : b.find("img");
                },
            },
        });
       
       
       
    }
    function t() {
        enquire.register("screen and (min-width: 993px)", {
            match: function () {
                l = 1;
            },
            unmatch: function () {
                l = 0;
                jQuery("#menu-btn").show();
            },
        });
        enquire.register("screen and (max-width: 993px)", {
            match: function () {
                a("header").addClass("header-mobile");
                var e = jQuery("body");
                e.hasClass("side-content") && e.removeClass("side-layout");
            },
            unmatch: function () {
                a("header").removeClass("header-mobile");
                jQuery("header").css("height", m);
                var e = jQuery("body");
                e.hasClass("side-content") && e.addClass("side-layout");
            },
        });
        p();
        u();
        v();
        var b = a("header");
        b.removeClass("smaller");
        b.removeClass("logo-smaller");
        b.removeClass("clone");
        var c = window.matchMedia("(max-width: 992px)"),
            d = jQuery(".owl-slide-wrapper");
        c.matches
            ? (d.find("img").css("height", a(window).innerHeight()), d.find("img").css("width", "auto"), 1 == q && b.removeClass("autoshow"))
            : (d.find("img").css("width", "100%"), d.find("img").css("height", "auto"), 1 == q && b.addClass("autoshow"));
    }
    function w() {
       
      
        jQuery("#items-carousel-5-cols").owlCarousel({
            center: !1,
            items:3,
            rewind: !0,
            margin: 25,
            nav: !0,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            dots: !1,
            responsive: { 1e3: { items: 4 }, 800: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } },
        });
        jQuery("#collection-carousel-5-cols").owlCarousel({
            center: !1,
            items: 5,
            loop: !0,
            margin: 25,
            nav: !0,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            dots: !1,
            responsive: { 1e3: { items: 5 }, 800: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } },
        });
      
        jQuery("#item-carousel-big").owlCarousel({ loop: !0, margin: 25, nav: !1, dots: !1, responsive: { 1e3: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } } });
        jQuery("#item-carousel-big-type-2").owlCarousel({ autoplay: !0, loop: !0, margin: 25, nav: !1, dots: !1, responsive: { 1e3: { items: 1 }, 600: { items: 1 }, 0: { items: 1 } } });
        var b = a("#item-carousel-big");
        b.owlCarousel();
        a(".d-carousel .d-arrow-right").click(function () {
            b.trigger("next.owl.carousel");
        });
        a(".d-carousel .d-arrow-left").click(function () {
            b.trigger("prev.owl.carousel");
        });
        var c = a("#item-carousel-big-type-2");
        c.owlCarousel();
        a(".d-carousel .d-arrow-right").click(function () {
            c.trigger("next.owl.carousel");
        });
        a(".d-carousel .d-arrow-left").click(function () {
            c.trigger("prev.owl.carousel");
        });
       
      
        a(".next").on("click", function () {
            a(this).parent().parent().find(".blog-slide").trigger("owl.next");
        });
        a(".prev").on("click", function () {
            a(this).parent().parent().find(".blog-slide").trigger("owl.prev");
        });
        jQuery(".owl-custom-nav").each(function () {
            var h = a(".owl-custom-nav").next(),
                g = parseInt(h.css("height"), 10);
            a(this).css("margin-top", g / 2 - 25);
            h.owlCarousel();
            a(".btn-next").on("click", function () {
                h.trigger("owl.next");
            });
            a(".btn-prev").on("click", function () {
                h.trigger("owl.prev");
            });
        });
        var d = a("#custom-owl-slider"),
            e = a(".owl-slider-nav"),
            f = a(window).innerHeight();
        e.css("top", f / 2 - 25);
        d.owlCarousel();
        e.find(".next").on("click", function () {
            d.trigger("owl.next");
        });
        e.find(".prev").on("click", function () {
            d.trigger("owl.prev");
        });
        jQuery(".owl-slide-wrapper")
            .on("mouseenter", function () {
                e.find(".next").css("right", "40px");
                e.find(".prev").css("left", "40px");
            })
            .on("mouseleave", function () {
                e.find(".next").css("right", "-50px");
                e.find(".prev").css("left", "-50px");
            });
    }
    function x() {
        var b = jQuery("#gallery");
        b.isotope({ itemSelector: ".item", filter: "*" });
        jQuery("#filters a").on("click", function () {
            var c = jQuery(this);
            if (c.hasClass("selected")) return !1;
            c.parents().find(".selected").removeClass("selected");
            c.addClass("selected");
            c = jQuery(this).attr("data-filter");
            b.isotope({ filter: c });
            return !1;
        });
    }
    function I() {
        var b = jQuery(".row-masonry");
        b.isotope({ itemSelector: ".item" });
        jQuery("#filters a").on("click", function () {
            var c = jQuery(this);
            if (c.hasClass("selected")) return !1;
            c.parents().find(".selected").removeClass("selected");
            c.addClass("selected");
            c = jQuery(this).attr("data-filter");
            b.isotope({ filter: c });
            return !1;
        });
    }
    function y() {
        var b = a(window).scrollTop();
        500 < b && (a("#back-to-top").addClass("show"), a("#back-to-top").removeClass("hide"), (z = 1));
        500 > b && 1 == z && a("#back-to-top").addClass("hide");
        a("#back-to-top").on("click", function (c) {
            c.preventDefault();
            a("html,body").stop(!0).animate({ scrollTop: 0 }, 700);
        });
    }
    function J() {
        jQuery(".timer").each(function () {
            var b = jQuery(this).offset().top,
                c = jQuery(window).scrollTop();
            b < c + jQuery(window).height() &&
                "0" == A &&
                jQuery(function (d) {
                    jQuery(".timer").each(function (e) {
                        A = "1";
                        var f = jQuery(this);
                        e = d.extend({}, e || {}, f.data("countToOptions") || {});
                        f.countTo(e);
                    });
                });
        });
    }
    function K() {
        a("body,div,section,span").css("background-color", function () {
            return jQuery(this).data("bgcolor");
        });
        a("body,div,section").css("background", function () {
            return jQuery(this).data("bgimage");
        });
        a(".rtl div,.rtl section").css("background", function () {
            return jQuery(this).data("bgimage_rtl");
        });
        a("body,div,section").css("background-size", function () {
            return "cover";
        });
    }
    function L() {
        jQuery(".de_tab").find(".de_tab_content > div").hide();
        jQuery(".de_tab").find(".de_tab_content > div:first").show();
        jQuery("li").find(".v-border").fadeTo(150, 0);
        jQuery("li.active").find(".v-border").fadeTo(150, 1);
        jQuery(".de_nav li").on("click", function () {
            jQuery(this).parent().find("li").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).parent().parent().find(".v-border").fadeTo(150, 0);
            jQuery(this).parent().parent().find(".de_tab_content > div").hide();
            var b = jQuery(this).index();
            jQuery(this)
                .parent()
                .parent()
                .find(".de_tab_content > div:eq(" + b + ")")
                .fadeIn();
            jQuery(this).find(".v-border").fadeTo(150, 1);
        });
        jQuery("#request_form .btn-right").on("click", function () {
            var b = a("#rq_name").val(),
                c = a("#rq_email").val(),
                d = a("#rq_phone").val();
            0 == b.length ? a("#rq_name").addClass("error_input") : a("#rq_name").removeClass("error_input");
            0 == c.length ? a("#rq_email").addClass("error_input") : a("#rq_email").removeClass("error_input");
            0 == d.length ? a("#rq_phone").addClass("error_input") : a("#rq_phone").removeClass("error_input");
            0 != b.length && 0 != c.length && 0 != d.length && (jQuery("#rq_step_1").hide(), jQuery("#rq_step_2").fadeIn());
        });
        jQuery(".de_review").find(".de_tab_content > div").hide();
        jQuery(".de_review").find(".de_tab_content > div:first").show();
        jQuery(".de_review").find(".de_nav li:first").fadeTo(150, 1);
        jQuery(".de_nav li").on("click", function () {
            n();
            jQuery(this).parent().find("li").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).fadeTo(150, 1);
            jQuery(this).parent().parent().find(".de_tab_content > div").hide();
            var b = jQuery(this).index();
            jQuery(this)
                .parent()
                .parent()
                .find(".de_tab_content > div:eq(" + b + ")")
                .show();
        });
        jQuery(".toggle-list h2").addClass("acc_active");
        jQuery(".toggle-list h2").toggle(
            function () {
                jQuery(this).addClass("acc_noactive");
                jQuery(this).next(".ac-content").slideToggle(200);
            },
            function () {
                jQuery(this).removeClass("acc_noactive").addClass("acc_active");
                jQuery(this).next(".ac-content").slideToggle(200);
            }
        );
        jQuery(".expand-custom .toggle").click(function () {
            jQuery(this).stop().toggleClass("clicked");
            jQuery(this).stop().parent().parent().parent().find(".details").slideToggle(500);
        });
    }
    function v() {
        jQuery(".de-video-container").each(function () {
            var b = jQuery(this).css("height"),
                c = jQuery(this).find(".de-video-content").css("height");
            c = (b.substring(0, b.length - 2) - c.substring(0, c.length - 2)) / 2;
            jQuery(this).find(".de-video-overlay").css("height", b);
            jQuery(this).find(".de-video-content").animate({ "margin-top": c }, "fast");
        });
    }
    function M() {
        jQuery(".center-xy").each(function () {
            jQuery(this)
                .parent()
                .find("img")
                .on("load", function () {
                    var b = parseInt(jQuery(this).parent().find(".center-xy").css("width"), 10),
                        c = parseInt(jQuery(this).parent().find(".center-xy").css("height"), 10),
                        d = jQuery(this).css("width"),
                        e = jQuery(this).css("height"),
                        f = jQuery(this).parent();
                    f.find(".center-xy").css("left", parseInt(d, 10) / 2 - b / 2);
                    f.find(".center-xy").css("top", parseInt(e, 10) / 2 - c / 2);
                    f.find(".bg-overlay").css("width", d);
                    f.find(".bg-overlay").css("height", e);
                })
                .each(function () {
                    this.complete && a(this).load();
                });
        });
    }
    function N() {
        jQuery("#mainmenu li a").each(function () {
            0 < a(this).next("ul").length && a("<span></span>").insertAfter(a(this));
        });
        jQuery("#mainmenu > li > span").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                    a(this).addClass("active");
                    a(this).parent().find("ul:first").css("height", "auto");
                    var c = a(this).parent().find("ul:first").height();
                    a(this).parent().find("ul:first").css("height", "0");
                    a(this).parent().find("ul:first").animate({ height: c }, 300, "easeOutQuint");
                    a("header").css("height", a("#mainmenu")[0].scrollHeight + c + 2 * parseInt(m));
                    break;
                case 2:
                    (c = a(this).parent().find("ul:first").height()),
                        a(this).removeClass("active"),
                        a(this).parent().find("ul:first").animate({ height: "0" }, 300, "easeOutQuint"),
                        a("header").css("height", a("#mainmenu")[0].scrollHeight - c + 2 * parseInt(m));
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        jQuery("#mainmenu > li > ul > li > span").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                    a(this).addClass("active");
                    a(this).parent().find("ul:first").css("height", "auto");
                    a(this).parent().parent().parent().find("ul:first").css("height", "auto");
                    var c = a(this).parent().find("ul:first").height();
                    a(this).parent().find("ul:first").css("height", "0");
                    a(this).parent().find("ul:first").animate({ height: c }, 400, "easeInOutQuint");
                    break;
                case 2:
                    a(this).removeClass("active"), a(this).parent().find("ul:first").animate({ height: "0" }, 400, "easeInOutQuint");
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        jQuery(".nft__item_click").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                    var c = jQuery(this).parent().parent().find(".nft__item_extra");
                    c.css("visibility", "visible");
                    c.css("opacity", "1");
                    break;
                case 2:
                    (c = jQuery(this).parent().parent().find(".nft__item_extra")), c.css("visibility", "hidden"), c.css("opacity", "0");
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        a(".nft__item").mouseleave(function () {
            var b = jQuery(this).find(".nft__item_extra");
            b.css("visibility", "hidden");
            b.css("opacity", "0");
            jQuery(this).find(".nft__item_click").data("iteration", 1);
        });
        jQuery(".nft__item_like").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                    a(this).find("i").addClass("active");
                    var c = parseInt(a(this).find("span").text()) + 1;
                    a(this).find("span").text(c);
                    break;
                case 2:
                    a(this).find("i").removeClass("active"), (c = parseInt(a(this).find("span").text()) - 1), a(this).find("span").text(c);
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        jQuery(".play-pause").on("click", function () {
            var b = a(this).data("iteration") || 1,
                c = a(this).parent().parent().find(".track"),
                d = a(this).parent().parent().parent().find(".circle-ripple");
            switch (b) {
                case 1:
                    c[0].play();
                    a(this).addClass("pause");
                    a(this).removeClass("play");
                    d.fadeIn();
                    break;
                case 2:
                    c[0].pause(), a(this).addClass("play"), a(this).removeClass("pause"), d.fadeOut();
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        jQuery("#de-click-menu-profile").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                    a("#de-submenu-profile").show();
                    a("#de-submenu-profile").addClass("open");
                  
                    break;
                case 2:
                    a("#de-submenu-profile").removeClass("open"), a("#de-submenu-profile").hide();
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
        jQuery("#de-click-menu-notification").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
                case 1:
                  
                    a("#de-submenu-profile").removeClass("open");
                    a("#de-submenu-profile").hide();
                    a("#de-click-menu-profile").data("iteration", 1);
                    break;
                case 2:
                 
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
    }
    function O() {
        var b = jQuery(".sequence > .gallery-item .picframe"),
            c = b.length;
        b.addClass("fadeIn");
        b.find("img").addClass("slideInUp");
        for (b = 0; b <= c; b++) {
            var d = jQuery(".sequence > .gallery-item:eq(" + b + ") .picframe");
            d.attr("data-wow-delay", b / 8 + "s");
            d.find("img").attr("data-wow-delay", b / 16 + "s");
        }
    }
    function P() {
        var b = jQuery(".sequence").find(".sq-item"),
            c = b.length;
        b.addClass("fadeInUp");
        for (b = 0; b <= c; b++) {
            var d = jQuery(".sequence").find(".sq-item:eq(" + b + ")");
            d.attr("data-wow-delay", b / 8 + "s");
            d.attr("data-wow-speed", "1s");
        }
    }
    function Q() {
        var b = R.scrollTop();
        B.forEach(function (c) {
            c.update(b);
        });
    }
    function C(b) {
        this.el = a(b);
        this.speed = parseInt(this.el.attr("data-scroll-speed"));
    }
    function p() {
        var b = jQuery("#de-sidebar").css("height"),
            c = jQuery(window).innerHeight(),
            d = parseInt(b) - parseInt(c);
        (function () {
            var e = window.matchMedia("(min-width: 993px)");
            window.matchMedia("(min-width: 768px)");
            if (e.matches) {
                var f = window.pageYOffset || document.documentElement.scrollTop,
                    h = jQuery("header");
                0 < f ? h.addClass("smaller") : h.hasClass("smaller") && h.removeClass("smaller");
            }
            e.matches &&
                jQuery("header").hasClass("side-header") &&
                (jQuery(document).scrollTop() >= d
                    ? (jQuery("#de-sidebar").css("position", "fixed"),
                      parseInt(b) > parseInt(c) && jQuery("#de-sidebar").css("top", -d),
                      jQuery("#main").addClass("col-md-offset-3"),
                      jQuery("h1#logo img").css("padding-left", "7px"),
                      jQuery("header .h-content").css("padding-left", "7px"),
                      jQuery("#mainmenu li").css("width", "103%"))
                    : (jQuery("#de-sidebar").css("position", "relative"),
                      parseInt(b) > parseInt(c) && jQuery("#de-sidebar").css("top", 0),
                      jQuery("#main").removeClass("col-md-offset-3"),
                      jQuery("h1#logo img").css("padding-left", "0px"),
                      jQuery("header .h-content").css("padding-left", "0px"),
                      jQuery("#mainmenu li").css("width", "100%")));
        })();
        jQuery(".activity-filter > li").on("click", function () {
            var e = a(this).data("iteration") || 1;
            switch (e) {
                case 1:
                    jQuery(".activity-list > li").hide(),
                        jQuery(this).hasClass("filter_by_followings")
                            ? jQuery("li.act_follow").show()
                            : jQuery(this).hasClass("filter_by_sales")
                            ? jQuery("li.act_sale").show()
                            : jQuery(this).hasClass("filter_by_offers")
                            ? jQuery("li.act_offer").show()
                            : jQuery(this).hasClass("filter_by_likes") && jQuery("li.act_like").show(),
                        jQuery(".activity-filter > li").removeClass("active"),
                        jQuery(this).addClass("active");
            }
            e++;
            2 < e && (e = 1);
            a(this).data("iteration", e);
        });
        jQuery(".filter__r").on("click", function () {
            jQuery(".activity-filter > li").removeClass("active");
            jQuery(".activity-list > li").show();
        });
        jQuery(".btn-close").on("click", function () {
            var e = a(this).data("iteration") || 1;
            switch (e) {
                case 1:
                    jQuery("#popup-box").addClass("popup-hide"), jQuery("#popup-box").removeClass("popup-show");
            }
            e++;
            2 < e && (e = 1);
            a(this).data("iteration", e);
        });
        a("#sw-1").click(function () {
            a(this).is(":checked") ? (a(".opt-1").css("display", "none"), a(".opt-2").css("display", "inline-block")) : (a(".opt-2").css("display", "none"), a(".opt-1").css("display", "inline-block"));
        });
    }
    function u() {
      
        jQuery(".de-team-list")
            .on("mouseenter", function () {
                jQuery(this).find("img").css("height");
                jQuery(this).find(".team-desc").stop(!0).animate({ top: "0px" }, 350, "easeOutQuad");
                jQuery(this).find("img").stop(!0).animate({ "margin-top": "-100px" }, 400, "easeOutQuad");
            })
            .on("mouseleave", function () {
                var c = jQuery(this).find("img").css("height");
                jQuery(this).find(".team-desc").stop(!0).animate({ top: c }, 350, "easeOutQuad");
                jQuery(this).find("img").stop(!0).animate({ "margin-top": "0px" }, 400, "easeOutQuad");
            });
        jQuery(".item .picframe").each(function () {
            var c = jQuery(this).find("img");
            c.css("width", "100%");
            c.css("height", "auto");
            c.on("load", function () {
                jQuery(this).css("width");
                var d = jQuery(this).css("height");
                jQuery(this).parent().css("height", d);
            }).each(function () {
                this.complete && a(this).load();
            });
        });
        jQuery(".overlay").fadeTo(1, 0);
        jQuery(".item .picframe")
            .on("mouseenter", function () {
                var c = jQuery(this).parent().find(".overlay");
                c.width(jQuery(this).find("img").css("width"));
                c.height(jQuery(this).find("img").css("height"));
                c.stop(!0).fadeTo(200, 1);
                c = jQuery(this).find("img").css("height");
                c = c.substring(0, c.length - 2) / 2 - 10;
                jQuery(this).parent().find(".pf_text").css("margin-top", c);
                jQuery(this).parent().find(".pf_text").stop(!0).animate({ opacity: "1" }, 1e3, "easeOutCubic");
                c = jQuery(this).find("img").css("width");
                var d = jQuery(this).find("img").css("height");
                c = parseInt(c, 10);
                d = parseInt(d, 10);
                jQuery(this)
                    .find("img")
                    .stop(!0)
                    .animate({ width: 1 * c, height: 1 * d, "margin-left": (0 * -c) / 2, "margin-top": (0 * -d) / 2 }, 400, "easeOutCubic");
            })
            .on("mouseleave", function () {
                var c = jQuery(this).find("img").css("height");
                c.substring(0, c.length - 2);
                jQuery(this).parent().find(".pf_text").stop(!0).animate({ opacity: "0" }, 400, "easeOutCubic");
                jQuery(this).parent().find(".overlay").stop(!0).fadeTo(200, 0);
                jQuery(this).find("img").stop(!0).animate({ width: "100%", height: "100%", "margin-left": 0, "margin-top": 0 }, 400, "easeOutQuad");
            });
        jQuery(".overlay").fadeTo(1, 0);
        var b = parseInt(jQuery(window).innerHeight() / 2) - 30;
        a(".preloader1").css("top", b);
        jQuery(".grid.border").css("padding-top", 10);
        jQuery(".grid.border").css("padding-left", 10);
        jQuery("#selector .opt.tc1").addClass("active");
        jQuery("#selector .opt").on("click", function () {
            jQuery("#selector .opt").removeClass("active");
            var c = jQuery(this).data("color");
            jQuery("#colors").attr("href", "css/colors/" + c + ".css");
            jQuery(this).addClass("active");
        });
    }
    function S() {
        jQuery("#selector").on("click", function () {
            var b = a(this).data("iteration") || 1;
            switch (b) {
              
                case 1:
                    jQuery("body").removeClass("rtl"),
                        jQuery("#bootstrap").attr("href", "css/bootstrap.min.css"),
                        jQuery("#bootstrap-grid").attr("href", "css/bootstrap-grid.min.css"),
                        jQuery("#bootstrap-reboot").attr("href", "css/bootstrap-reboot.min.css"),
                        jQuery("#mdb").attr("href", "css/mdb.min.css"),
                        jQuery("html").attr("dir", "ltr"),
                        jQuery(this).find(".sc-val").text("Click to Enable"),
                        a("body,div,section").css("background", function () {
                            return jQuery(this).data("bgimage");
                        }),
                        a("body,div,section").css("background-size", function () {
                            return "cover";
                        });
            }
            b++;
            2 < b && (b = 1);
            a(this).data("iteration", b);
        });
    }
    function r() {
        jQuery(".grid-item").each(function () {
            var b = Number(jQuery(this).parent().attr("data-col")),
                c = Number(jQuery(this).parent().attr("data-gridspace")),
                d = eval(a(this).parent().attr("data-ratio"));
            jQuery(this).parent().css("padding-left", c);
            b = (a(document).width() - (c * b + 1)) / b - c / b;
            var e = a(this);
            d *= b;
            e.css("width", b);
            e.css("height", d);
            e.find(".pf_title").css("margin-top", d / 2 - 10);
            e.css("margin-right", c);
            e.css("margin-bottom", c);
            a(this).parent().css("padding-top", c);
            e.hasClass("large") && (a(this).css("width", 2 * b + c), a(this).css("height", 2 * d + c));
            e.hasClass("large-width") && (a(this).css("width", 2 * b + c), a(this).css("height", d));
            e.hasClass("large-height") && (a(this).css("height", 2 * d + c), e.find(".pf_title").css("margin-top", d - 20));
        });
    }
    function D() {
        jQuery(".full-height").each(function () {
            var b = jQuery(window).innerHeight();
            jQuery(this).css("min-height", b);
        });
    }
    function E() {
        jQuery(".de-progress").each(function () {
            var b = jQuery(this).offset().top,
                c = jQuery(this).find(".progress-bar").attr("data-value"),
                d = jQuery(window).scrollTop();
            b < d + 550 && jQuery(this).find(".progress-bar").css({ width: c }, "slow");
            jQuery(this).find(".value").text(jQuery(this).find(".progress-bar").attr("data-value"));
        });
    }
    function n() {
        var b;
        jQuery(".nft__item_wrap").each(function () {
            b = jQuery(this).css("width");
            jQuery(this).css("height", b);
        });
        a(".nft__item_preview")
            .on("load", function () {})
            .each(function () {
                if (this.complete) {
                    var c = a(this).width(),
                        d = a(this).height();
                    c < d && (a(this).addClass("portrait"), a(this).parent().addClass("portrait"));
                }
            });
    }
    function T() {
        a(".de_countdown").each(function () {
            var b = a(this).data("year"),
                c = a(this).data("month"),
                d = a(this).data("day"),
                e = a(this).data("hour");
            a(this).countdown({ until: new Date(b, c - 1, d, e) });
        });
    }
    function U(b) {
        b = jQuery(b).text();
        var c = jQuery("#btn_copy");
        navigator.clipboard.writeText(b).then(
            function () {
                var d = c.text();
                c.html("Copied!");
                c.addClass("clicked");
                setTimeout(function () {
                    c.html(d);
                    c.removeClass("clicked");
                }, 750);
            },
            function () {
                c.html("Error");
            }
        );
    }
    function k(b) {
        b = a(b + ".dropdown");
        var c = b.find(".btn-selector"),
            d = b.find("ul"),
            e = d.find("li");
        b.on("mouseenter", function () {
            d.show();
            a(this).css("z-index", 1e3);
        }).on("mouseleave", function () {
            d.hide();
            a(this).css("z-index", "auto");
        });
        e.on("click", function () {
            d.hide();
            var f = a(this).text();
            e.removeClass("active");
            a(this).addClass("active");
            c.text(f);
        });
    }
    var l = 0,
        A = "0",
        B = [],
        R = a(window),
        m = "90",
        q = 0;
    a("header").hasClass("has-topbar") && (m = "125px");
    a("#de-submenu-profile").hide();
  
    !(function (b) {
        b.fn.fitVids = function (c) {
            var d = { customSelector: null },
                e = document.createElement("div"),
                f = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            return (
                (e.className = "fit-vids-style"),
                (e.innerHTML =
                    "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>"),
                f.parentNode.insertBefore(e, f),
                c && b.extend(d, c),
                this.each(function () {
                    var h = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
                    d.customSelector && h.push(d.customSelector);
                    b(this)
                        .find(h.join(","))
                        .each(function () {
                            var g = b(this);
                            if (!(("embed" == this.tagName.toLowerCase() && g.parent("object").length) || g.parent(".fluid-width-video-wrapper").length)) {
                                var F = "object" == this.tagName.toLowerCase() || g.attr("height") ? g.attr("height") : g.height(),
                                    V = g.attr("width") ? g.attr("width") : g.width();
                                F /= V;
                                g.attr("id") || g.attr("id", "fitvid" + Math.floor(999999 * Math.random()));
                                g.wrap('<div class="fluid-width-video-wrapper"></div>')
                                    .parent(".fluid-width-video-wrapper")
                                    .css("padding-top", 100 * F + "%");
                                g.removeAttr("height").removeAttr("width");
                            }
                        });
                })
            );
        };
    })(jQuery);
    var z = 0;
    a.scrollTo = a.fn.scrollTo = function (b, c, d) {
        if (!(this instanceof a)) return a.fn.scrollTo.apply(a("html, body"), arguments);
        d = a.extend({}, { gap: { x: 0, y: 0 }, animation: { easing: "easeInOutExpo", duration: 600, complete: a.noop, step: a.noop } }, d);
        return this.each(function () {
            var e = jQuery("body").hasClass("side-layout") ? 0 : 69;
            a(this)
                .stop()
                .animate({ scrollLeft: isNaN(Number(b)) ? a(c).offset().left + d.gap.x : b, scrollTop: isNaN(Number(c)) ? a(c).offset().top + d.gap.y - e : c }, d.animation);
        });
    };
    a.fn.moveIt = function () {
        a(this).each(function () {
            B.push(new C(a(this)));
        });
    };
    C.prototype.update = function (b) {
        this.el.css("transform", "translateY(" + b / this.speed + "px)");
    };
    a(function () {
        a("[data-scroll-speed]").moveIt();
    });
    jQuery(document).ready(function () {
        a(".de-preloader").delay(500).fadeOut(500);
        ("use strict");
        S();
        H();
        M();
        u();
        r();
        t();
        E();
        T();
        k("#item_category");
        k("#item_collection");
        k("#buy_category");
        k("#items_type");
        k("#items_type2");
        k("#filter_by_duration");
        k("#filter_by_category");
        k("#select_lang");
        k("#select_scheme");
        a(function () {
            a(".lazy").lazy();
        });
        var b = jQuery(window).innerHeight();
        jQuery("#homepage #content.content-overlay").css("margin-top", b);
        jQuery(".full-height .de-video-container").css("min-height", b);
        jQuery("header").hasClass("autoshow") && (q = 1);
        jQuery("#btn_copy").on("click", function () {
            U("#wallet");
        });
        a("#mainmenu > li:has(ul)").addClass("menu-item-has-children");
        a(".d-item").slice(0, 8).show();
        a("#loadmore").on("click", function (c) {
            c.preventDefault();
            a(".d-item:hidden").slice(0, 4).slideDown();
            0 == a(".d-item:hidden").length && a("#loadmore").hide();
            n();
        });
        D();
        a("#mainmenu li:has(ul)").addClass("has-child");
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (c) {
            return new bootstrap.Tooltip(c);
        });
        [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (c) {
            return new bootstrap.Popover(c);
        });
        jQuery(".blog-list")
            .on("mouseenter", function () {
                var c = jQuery(this).find(".blog-slide").css("height"),
                    d = jQuery(this).find(".blog-slide").css("width");
                c = c.substring(0, c.length - 2) / 2 - 40;
                var e = jQuery(this).find(".owl-arrow");
                e.css("margin-top", c);
                e.css("width", d);
                e.fadeTo(150, 1);
            })
            .on("mouseleave", function () {
                jQuery(this).find(".owl-arrow").fadeTo(150, 0);
            });
        jQuery("#logo-carousel img")
            .on("mouseenter", function () {
                jQuery(this).fadeTo(150, 0.5);
            })
            .on("mouseleave", function () {
                jQuery(this).fadeTo(150, 1);
            });
        a("#back-to-top").length && y();
        jQuery(".nav-exit").on("click", function () {
            a.magnificPopup.close();
        });
        jQuery(".d-carousel")
            .on("mouseenter", function () {
                jQuery(".d-arrow-left").fadeTo(50, 1);
                jQuery(".d-arrow-right").fadeTo(50, 1);
            })
            .on("mouseleave", function () {
                jQuery(".d-arrow-left").fadeTo(50, 0);
                jQuery(".d-arrow-right").fadeTo(50, 0);
            });
        jQuery("#menu-btn").on("click", function () {
            a("#de-submenu-profile").removeClass("open");
            a("#de-submenu-profile").hide();
            a("#de-click-menu-profile").data("iteration", 1);
          
            a("#de-click-menu-notification").data("iteration", 1);
            var c = jQuery("header")[0].scrollHeight;
            0 == l ? (jQuery("header.header-mobile").stop(!0).animate({ height: c }, 200, "easeOutCubic"), (l = 1)) : (jQuery("header.header-mobile").stop(!0).animate({ height: m }, 200, "easeOutCubic"), (l = 0));
        });
        jQuery("a.btn").on("click", function (c) {
            -1 != this.href.indexOf("#") && (c.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash));
        });
        jQuery(".de-gallery .item .icon-info").on("click", function () {
            jQuery(".page-overlay").show();
            url = jQuery(this).attr("data-value");
            jQuery("#loader-area .project-load").load(url, function () {
                jQuery("#loader-area").slideDown(500, function () {
                    jQuery(".page-overlay").hide();
                    jQuery("html, body").animate({ scrollTop: jQuery("#loader-area").offset().top - 70 }, 500, "easeOutCubic");
                    jQuery(".image-slider").owlCarousel({ items: 1, singleItem: !0, navigation: !1, pagination: !0, autoPlay: !1 });
                    jQuery(".container").fitVids();
                    jQuery("#btn-close-x").on("click", function () {
                        jQuery("#loader-area").slideUp(500, function () {
                            jQuery("html, body").animate({ scrollTop: jQuery("#section-portfolio").offset().top - 70 }, 500, "easeOutCirc");
                        });
                        return !1;
                    });
                });
            });
        });
       
       
        jQuery(".arrow-up").on("click", function () {
            jQuery(".coming-soon .coming-soon-content").fadeOut("medium", function () {
                jQuery("#hide-content").fadeIn(600, function () {
                    jQuery(".arrow-up").animate({ bottom: "-40px" }, "slow");
                    jQuery(".arrow-down").animate({ top: "0" }, "slow");
                });
            });
        });
        jQuery(".arrow-down").on("click", function () {
            jQuery("#hide-content").fadeOut("slow", function () {
                jQuery(".coming-soon .coming-soon-content").fadeIn(800, function () {
                    jQuery(".arrow-up").animate({ bottom: "0px" }, "slow");
                    jQuery(".arrow-down").animate({ top: "-40" }, "slow");
                });
            });
        });
     
        a(".switch-with-title .checkbox").change(function () {
            this.checked ? jQuery(this).parent().parent().find(".hide-content").show() : jQuery(this).parent().parent().find(".hide-content").hide();
        });
        v();
        x();
        I();
        K();
        N();
        w();
        L();
        p();
        n();
        new WOW().init();
        a("#homepage nav a, .scroll-to").on("click", function (c) {
            -1 != this.href.indexOf("#") && (c.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash));
        });
        O();
        P();
        a(".accordion-section-title").click(function (c) {
            var d = a(this).data("tab");
            a(c.target).is(".active")
                ? (a(this).removeClass("active"), a(".accordion-section-content:visible").slideUp(300))
                : (a(".accordion-section-title").removeClass("active").filter(this).addClass("active"), a(".accordion-section-content").slideUp(300).filter(d).slideDown(300));
        });
        a("#get_file,#get_file_2").click(function () {
            a("#upload_file").click();
        });
        a("#click_profile_img").click(function () {
            a("#upload_profile_img").click();
        });
        a("#click_banner_img").click(function () {
            a("#upload_banner_img").click();
        });
        a("#upload_file").change(function () {
            var c = a(this).val().replace(/^.*\\/, "");
            a("#file_name").text(c);
        });
        jQuery.each(jQuery("textarea[data-autoresize]"), function () {
            var c = this.offsetHeight - this.clientHeight;
            jQuery(this)
                .on("keyup input", function () {
                    jQuery(this)
                        .css("height", "auto")
                        .css("height", this.scrollHeight + c);
                })
                .removeAttr("data-autoresize");
        });
        a(window).resize(function () {
            t();
            D();
            r();
            n();
        });
        a(window).on("load", function () {
            x();
            w();
            window.dispatchEvent(new Event("resize"));
            a(".grid").isotope({ itemSelector: ".grid-item" });
            r();
        });
        jQuery(window).on("scroll", function () {
            G();
            J();
            E();
            p();
            y();
            Q();
            var c = a(".fadeScroll"),
                d = c.outerHeight();
            d = (d - window.scrollY) / d;
            0 <= d ? c.css("opacity", d) : c.css("opacity", 0);
            jQuery("#mainmenu li a").each(function () {
                var e = jQuery(this);
                if (-1 != this.href.indexOf("#")) {
                    var f = jQuery(this).attr("href");
                    "" !== location.hash &&
                        jQuery(window).scrollTop() > jQuery(f).offset().top - 140 &&
                        (clearTimeout(a.data(this, "scrollCheck")),
                        a.data(
                            this,
                            "scrollCheck",
                            setTimeout(function () {
                                jQuery("#mainmenu li a").removeClass("active");
                                e.addClass("active");
                            }, 250)
                        ));
                }
            });
            a(".toggle").click(function (e) {
                e.preventDefault();
                e = a(this);
                e.next().hasClass("show")
                    ? (e.next().removeClass("show"), e.next().slideUp(350))
                    : (e.parent().parent().find("li .inner").removeClass("show"), e.parent().parent().find("li .inner").slideUp(350), e.next().toggleClass("show"), e.next().slideToggle(350));
            });
        });
        a(function () {
            var c = 0;
            setInterval(function () {
                --c;
                a(".bg-loop").css("background-position", c + "px 0");
            }, 50);
        });
    });
})(jQuery);
