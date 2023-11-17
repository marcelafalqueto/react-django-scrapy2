from crawling.items import MovieItem
import scrapy
# from scrapy.loader import ItemLoader
# from varredor_de_sites.items import CitacaoItem
class QuotesToScrapeSpider(scrapy.Spider):
    # Identidade
    name = 'bot'
    # Reques
    def start_requests(self):
        # Definir url(s) a varrer
        urls = ['https://www.portellaleiloes.com.br/']
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for element in response.xpath('//article[@class="col-md-4 col-sm-6"]'):
            i = MovieItem()
            i['auction_type'] = element.xpath('.//p[@class="bid-type"]/text()').get()
            i['neighborhood'] = element.xpath('.//h2[@class="bid-title"]/text()').get()
            i['address'] = element.xpath('.//p[@class="bid-description"]/text()').get()
            i['data_auction1'] = element.xpath('.//div[@class="info-line clearfix {M:CLASS_IS_ATIVO_1}"]/p[@class="right"]/text()').get()
            i['initial_bid1'] = element.xpath('.//div[@class="info-line clearfix"]/p[@class="right"]/text()').get()
            i['data_leilao2'] = element.xpath('.//div[@class="info-line clearfix active"]/p[@class="right"]/text()').get()
            i['initial_bid2'] = element.xpath('.//div[@class="info-line clearfix active"][2]/p[@class="right"]/text()').get()
            i['link_image'] = element.xpath('.//section/header/a/img/@src').get()
            i['link_auction'] = element.xpath('.//section/header/a/@href').get()

            yield i
