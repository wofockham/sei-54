require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
    erb :home
end

get '/info' do
    info = StockQuote::Stock.quote params[:stock_code]
    @price = info.close
    erb :info
end