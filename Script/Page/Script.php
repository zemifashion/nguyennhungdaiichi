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
    }, false);
</script>