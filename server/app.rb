require 'sinatra'

get '/' do
	"Hello world"
end

get '/usd' do 
	"42"
end

get '/eur' do 
	"73"
end