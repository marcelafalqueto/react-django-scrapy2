from crawlerapp.models import React

from concurrent.futures import ThreadPoolExecutor
import asyncio

executor = ThreadPoolExecutor(max_workers=10)

def clean_title(param):
    return param

def clean_critics_consensus(param):
    return ' '.join(param)

def clean_average_grade(param):
    param = param.strip().replace('/5', '')
    return param

# def clean_poster(param):
#     if param:
#         param = param[0]['path']
#     return param

def clean_amount_reviews(param):
    return param.strip()

def clean_approval_percentage(param):
    return param.strip().replace('%', '')


class CrawlingPipeline(object):
    async def process_item(self, item, spider):
        # title = item['title']
        # critics_consensus = clean_critics_consensus(item['critics_consensus'])
        # average_grade = clean_average_grade(item['average_grade'])
        # # poster = clean_poster(item['images'])
        # amount_reviews = clean_amount_reviews(item['amount_reviews'])
        # approval_percentage = clean_approval_percentage(item['approval_percentage'])
        # try:
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(executor, lambda: React.objects.create(
            auction_type=item['auction_type'], 
            neighborhood=item['neighborhood'],
            address=item['address'],
            data_auction1=item['data_auction1'],
            initial_bid1=item['initial_bid1'],
            data_leilao2=item['data_leilao2'],
            initial_bid2=item['initial_bid2'],
            # open_or_closed=item['open_or_closed'],
            link_image=item['link_image'],
            link_auction=item['link_auction']
            ))
        # await loop.run_in_executor(executor, lambda: React.objects.create(neighborhood=item['neighborhood']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(address=item['address']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(data_auction1=item['data_auction1']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(initial_bid1=item['initial_bid1']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(data_leilao2=item['data_leilao2']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(initial_bid2=item['initial_bid2']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(open_or_closed=item['open_or_closed']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(link_image=item['link_image']))
        # await loop.run_in_executor(executor, lambda: React.objects.create(link_auction=item['link_auction']))
    
        
    # except Exception as e:
    #     print(f"Erro ao criar objeto: {e}")

        # Movie.objects.create(item['title'])

        # Movie.objects.create(
        #     title=title,
        #     # critics_consensus=critics_consensus,
        #     # average_grade=average_grade,
        #     # # poster=poster,
        #     # amount_reviews=amount_reviews,
        #     # approval_percentage=approval_percentage,
        # )

        return item