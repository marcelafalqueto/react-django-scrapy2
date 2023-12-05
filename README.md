Project to study crawling and collecting info from another website with a backend in Django and a frontend with ReactJS

In order for this project to work, it uses ReactJS for the frontend, Django for the backend, and Scrapy for the crawler.

I started to study IT in college 2 years ago and was always curious about the functioning of web apps. The first year I spent studying, I got a job as a front-end engineer. I got a little bit disappointed as I realized frontend was not my thing. Dealing with CSS was boring, and I realized i liked frontend enough only to get the job done (do a project), so I decided to start studying backend. In the backend, I found myself loving IT again, and decided to be challenged to do a project, which I didn't know any of the stacks besides the frontend.

I was motivated to do this project after getting to know the housing auction market when I realized there was only 1 website in Brazil that collected data from another auction websites and indexed all in one. My curiosity brought me to the questions: Why there is only one site in Brazil that does that? Why this website only indexed about 10 sites if there is much more than 1,000 of them? Is it so hard to crawl that this website only wanted to do about 10 websites?

Installed packages: Reactjs, Django, Scrapy, Django Rest Framewrok

The project was done by setting up a virtual environment that can be activated by: $ venv\scripts\activate

To run Django go to the folder backend: $ python manage.py runserver

To run ReactJS go to folder frontend: $ npm i (only the first time to install node_modules) $ npm run dev

Do not need to run the Scrapy as I already did, but if you want to see it working, go to the folder "crawling": $ scrapy crawl bot
