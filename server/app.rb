require 'sinatra'
require 'open-uri'
require 'nokogiri'
require 'json'

def get_currency url
	doc = Nokogiri::HTML(open(url)).
		css("div[class='au-mid-buysell']").to_a[0..1].map{|t| t.text.strip.split(/\n/).
			map{|x| x.strip}}.map{|r| [r[0], r[1].gsub(/[^\d,]/, '').gsub(',', '.')]}
end

url_usd = "http://minfin.com.ua/currency/auction/usd/buy/all/?sort=time&order=desc"
url_eur = "http://minfin.com.ua/currency/auction/eur/buy/all/?sort=time&order=desc"

get '/' do
	"Hello world"
end

get '/get' do
	content_type :json 
	dict = {}
	dict['usd'] = get_currency(url_usd)
	dict['eur'] = get_currency(url_eur)

	dict.to_json
end