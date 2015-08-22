require 'open-uri'
require 'nokogiri'

usd = Nokogiri::HTML(open("http://minfin.com.ua/currency/auction/usd/buy/all/?sort=time&order=desc")).
	css("div[class='au-mid-buysell']").to_a[0..1].map{|t| t.text.strip.split(/\n/).map{|x| x.strip}}

p usd