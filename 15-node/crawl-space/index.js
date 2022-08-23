const Crawler = require('crawler');

const isCrawlable = (url) => {
    const terribleSites = ['archive', 'github.com', 'microsoft.com', 'twitter.com', 'sourceware.org'];

    // magic
    const terribleSiteDetected = terribleSites.some((awfulSite) => {
        return url.includes(awfulSite);
    });

    return !terribleSiteDetected;

    // 1 liner: heavy magic
    // return ! terribleSites.some( awfulSite => url.includes(awfulSite) );
};

const c = new Crawler({
    rateLimit: 1000,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0',
    callback: (err, res, done) => {
        if (typeof res.$ === 'function') {
            console.log(res.request.uri.href); // the URL for the current page
            const title = res.$('title').text();
            console.log(title);
            console.log(); // new line for readability
    
            const $links = res.$('a[href^=http]'); // External sites only please
            $links.each(function () {
                const href = res.$(this).attr('href');
                if (isCrawlable(href)) {
                    c.queue(href);
                }
            });
        }
        done(); // we must call this every time the callback runs
    }
});

// process.argv contains command line arguments (and other crap)
c.queue(process.argv[2] || 'https://lobste.rs/');