// This code knows NOTHING about negative balances or overdraft protection.

// It simply connect the DOM elements to logical/business functions in accounts.js

// Lots of event handlers and all the DOM manipulation

const render = function () {
    // Our handy render() function updates every single part of the DOM with the
    // latest values from our accounts object.

    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if (accounts.savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }

    if (accounts.checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }
};

$(document).ready(function () {
    render();

    $('#checking-deposit').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingDeposit(amount);
        render();
    });

    $('#checking-withdraw').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingWithdraw(amount);
        render();
    });

    $('#savings-deposit').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsDeposit(amount);
        render();
    });

    $('#savings-withdraw').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsWithdraw(amount);
        render();
    });
});