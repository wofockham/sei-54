class StocksController < ApplicationController
    def form
    end

    def info
        StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
        @symbol = params[:symbol].upcase
        info = StockQuote::Stock.quote @symbol
        @price = info.latest_price
    end
end