// const fetchBrother = function () {
//     $('#brother').load('/api/brother');
// };

const fetchInfo = function () {
    $.getJSON('/api/info').done(function (info) {
        $('#brother').text(info.brother);
        $('#time').text(info.time);
        $('#uptime').text(info.uptime);
        $('#calls').text(info.calls);
        $('#floods').text(info.floods);
    });
};

setInterval(fetchInfo, 2000);