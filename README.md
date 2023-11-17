# react-django-scrapy2
Project to study about crawling, collecting info from another website with backend in django and frontend with reactjs

In order for this project to work, it is used reactjs for frontend, django for backend and scrapy for the crawler.

I started to study IT in college 2 years ago and was always curious about the functioning of web apps.
The first year I spent studying and got a job of frontend engineer.
Got a little bit disapointed as I realized frontend was not my thing. Dealing with CSS was boring, I realized i liked frontend enough only to get the job done (do a project) so I decided to start stuying backend.
In the backend I found myself loving IT again and decided to challenge me to do a project which I didint now any of the stacks, besides frontend.

I was motivated to do this project after getting to know the housing auction market when I realized there was only 1 website in Brazil that collected data from another auction websites and indexed all in one.
My curiosity brought me to the questions:
Why there is only one site in Brazil that does that?
Why this website only indexed about 10 sites if there is much more than 1 thousand of the same?
Is it so hard to crawling that this website only wanted to do about 10 websites indexing?

Installed packages:
Reactjs
Django
Scrapy
Django Rest Framewrok


Project was done by seeting a virtual enviroment that can be activated by:
$ venv\scripts\activate

To run django go to folder backend:
$ python manage.py runserver

To run Reactjs go to folder frontend:
$ npm i (only first time to install node_modules)
$ npm run dev

Do not need to run the scrapy as I already did but if want to see it working, go to the folder "crawling":
$ scrapy crawl bot 

