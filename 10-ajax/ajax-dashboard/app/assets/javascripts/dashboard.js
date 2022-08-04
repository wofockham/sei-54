const fetchBrother = function () {
    $('#brother').load('/api/brother');
};

const fetchTime = function () {
    $('#time').load('/api/time');
};

const fetchUptime = function () {
    $('#uptime').load('/api/uptime');
};

setInterval(fetchBrother, 4000); // polling
setInterval(fetchTime, 1000);
setInterval(fetchUptime, 7000);