const Crawler = require('crawler');

const c = new Crawler({
    rateLimit: 1000,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0',
    callback: (err, res, done) => {
        console.log(res.request.uri.href); // the URL for the current page
        const title = res.$('title').text();
        console.log(title);
        console.log(); // new line for readability

        const $links = res.$('a[href^=http]'); // External sites only please
        $links.each(function () {
            const href = res.$(this).attr('href');
            c.queue(href);
        });
        done();
    }
});

c.queue('https://lobste.rs/');