
$(window).load(function() {$('.a article').fadeTo('500', 1) }); $(document).ready(function() {document.documentElement.clientWidth < 768 && $("article").css("opacity", "1"), document.documentElement.clientWidth > 767 && $(window).scroll(function() {$("article").each(function() {var t = $(this).offset().top + $(this).outerHeight(), e = $(window).scrollTop() + $(window).height(); e > t && $(this).fadeTo("200", 1) }) }) }); $(document).ready(function() {$(".gal").lightGallery({download:false, counter:false }) });

//
/*
(function(i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function() {
(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o), m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-30592123-1', 'auto');
ga('send', 'pageview');*/