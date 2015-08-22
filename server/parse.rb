require 'open-uri'
require 'nokogiri'

def get_currency url
	Nokogiri::HTML(open(url)).
				css("div[class='au-mid-buysell']").to_a[0..1].map{|t| t.text.strip.split(/\n/).map{|x| x.strip}}
end

url_usd = "http://minfin.com.ua/currency/auction/usd/buy/all/?sort=time&order=desc"
url_eur = "http://minfin.com.ua/currency/auction/eur/buy/all/?sort=time&order=desc"

usd = get_currency url_usd
eur = get_currency url_eur


p usd
p eur