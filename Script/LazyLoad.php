<script>
    window.lazyLoadOptions = {
        elements_selector: "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
        data_src: "lazy-src",
        data_srcset: "lazy-srcset",
        data_sizes: "lazy-sizes",
        skip_invisible: false,
        class_loading: "lazyloading",
        class_loaded: "lazyloaded",
        threshold: 300,
        callback_load: function (element) {
            if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
                if (element.classList.contains("lazyloaded")) {
                    if (typeof window.jQuery != "undefined") {
                        if (jQuery.fn.fitVids) {
                            jQuery(element).parent().fitVids();
                        }
                    }
                }
            }
        }
    };
    // Listen to the Initialized event
    window.addEventListener('LazyLoad::Initialized', function (e) {
        // Get the instance and puts it in the lazyLoadInstance variable
        var lazyLoadInstance = e.detail.instance;

        if (window.MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (typeof node.getElementsByTagName !== 'function') {
                            return;
                        }

                        imgs = node.getElementsByTagName('img');
                        iframes = node.getElementsByTagName('iframe');
                        rocket_lazy = node.getElementsByClassName('rocket-lazyload');

                        if (0 === imgs.length && 0 === iframes.length && 0 === rocket_lazy.length) {
                            return;
                        }

                        lazyLoadInstance.update();
                    });
                });
            });

            var b = document.getElementsByTagName("body")[0];
            var config = {childList: true, subtree: true};

            observer.observe(b, config);
        }
    }, false);</script>
<script data-no-minify="1" async src="../js/lazyload.min.js"></script>
<script>function lazyLoadThumb(e) {
        var t = '<img data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" width="480" height="360"><noscript>' +
            '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" width="480" height="360"></noscript>',
            a = '<div class="play"></div>';
        return t.replace("ID", e) + a
    }

    function lazyLoadYoutubeIframe() {
        var e = document.createElement("iframe"), t = "https://www.youtube.com/embed/ID?autoplay=1";
        t += 0 === this.dataset.query.length ? '' : '&' + this.dataset.query;
        e.setAttribute("src", t.replace("ID", this.dataset.id)), e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(e, this)
    }

    document.addEventListener("DOMContentLoaded", function () {
        var e, t, a = document.getElementsByClassName("rll-youtube-player");
        for (t = 0; t < a.length; t++) e = document.createElement("div"), e.setAttribute("data-id", a[t].dataset.id), e.setAttribute("data-query", a[t].dataset.query), e.innerHTML = lazyLoadThumb(a[t].dataset.id), e.onclick = lazyLoadYoutubeIframe, a[t].appendChild(e)
    });</script>