from flask import Flask, redirect, url_for, render_template, request, abort, jsonify
from newsapi import NewsApiClient
import json, re

application = Flask(__name__, static_url_path='/static')

def newsFilter(data):
   tmp = {}
   for k, v in data.items():
      tmp[k] = v
      if k == 'articles':
         tmp[k] = []
         for item in data[k]:
            if item['author'] == None or\
               item['source'] == None or\
               item['description'] == None or\
               item['title'] == None or\
               item['url'] == None or\
               item['urlToImage'] == None or\
               item['publishedAt'] == None:
               continue
            tmp[k].append(item)
   return tmp

@application.route('/')
def index():
   #root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")
   #return send_from_directory(root, "home.html")#homepage.html在html文件夹下
   return application.send_static_file('home.html')

@application.route('/home', methods=['GET', 'POST'])
def home():
   # Init
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')

   # /v2/top-headlines
   top_headlines = newsapi.get_top_headlines(q='', sources='', language='en')
   
   # Word cloud
   wordFreq = {}
   tmp = ''
   for i in range(len(top_headlines['articles'])):
      tmp += top_headlines['articles'][i]['title']
   tmp = re.sub('[\(\)\{\}<>]', '', tmp).split()
   #print(tmp)

   # Remove stopwords
   file1 = open("stopwords_en.txt", "r")
   stopwords_en = file1.read().splitlines()
   file1.close()
   for word in tmp:
      if word.lower() not in stopwords_en:
         if word in wordFreq:
            wordFreq[word] += 1
         else:
            wordFreq[word] = 1
   wordFreq = sorted(wordFreq.items(), key=lambda kv: kv[1], reverse=False)
   top_headlines = newsFilter(top_headlines)
   
   # /v2/top-headlines
   cnn_top_headlines = newsapi.get_top_headlines(q='', sources='cnn', language='en')
   cnn_top_headlines = newsFilter(cnn_top_headlines)

   # /v2/top-headlines
   fox_news_top_headlines = newsapi.get_top_headlines(q='', sources='fox-news', language='en')
   fox_news_top_headlines = newsFilter(fox_news_top_headlines)

   # Combine all headlines
   headlines = {\
      'top_headlines': top_headlines,\
      'cnn_top_headlines': cnn_top_headlines,\
      'fox_news_top_headlines': fox_news_top_headlines,\
      'wordFreq': wordFreq}
   return json.dumps(headlines)

@application.route('/search', methods=['GET', 'POST'])
def searchNews():
   q = request.form['keyword']
   sources = '' if request.form['source'] == "all" else request.form['source']
   from_param = request.form['fromDate']
   to = request.form['toDate']

   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')

   try:
      all_articles = newsapi.get_everything(\
         q=q,\
         sources=sources,\
         from_param=from_param,\
         to=to,\
         language='en',\
         sort_by='publishedAt',\
         page=5)
      #print(all_articles)
      all_articles = newsFilter(all_articles)
      #print(all_articles)
      return json.dumps(all_articles)
   except Exception as e:
      #print(str(e))
      errorStr = str(e).strip("{'").strip("'}").strip('"}').split("', '")
      #print("errorStr----------------------")
      #print(errorStr)
      #print("errorStr----------------------")
      error = {}
      for item in errorStr:
         #print("item----------------------")
         #print(item)
         #print("item----------------------")
         t = item.split("': '")
         if len(t) == 1:
            t = t[0].split("'"+': "')
         #print("t----------------------")
         #print(t)
         #print("t----------------------")
         error[t[0]] = t[1]
         
      return json.dumps(error)

@application.route('/requestSource', methods=['GET', 'POST'])
def requestSource():
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')

   #print("--------------------------")
   #print(request.form['category'])
   #print("--------------------------")

   if request.form['category'] == "all":
      sources = newsapi.get_sources(country='us', language='en')
   else:
      sources = newsapi.get_sources(category=request.form['category'], country='us', language='en')

   result = []
   for i in range(len(sources['sources'])):
      result.append(sources['sources'][i]['id'])

   return json.dumps(result)

if __name__ == "__main__":
   application.debug = True
   application.run()
