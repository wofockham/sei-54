const checkForZero = function () {
    $('.zero').removeClass('zero');
    const checkingBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
    if (savingsBalance <= 0){
        $('#savings-balance').addClass('zero');
    }
};

$(document).ready(function () {
    checkForZero();

    $('#checking-deposit').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
        const depositAmount = + $('#checking-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#checking-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#checking-withdraw').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
        const withdrawAmount = + $('#checking-amount').val();
        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });

    $('#savings-deposit').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
        const depositAmount = + $('#savings-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#savings-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#savings-withdraw').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
        const withdrawAmount = + $('#savings-amount').val();
        const otherBalance = + $('#checking-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#savings-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#savings-balance').text('$0');
            $('#checking-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });
});