from flask import Flask, redirect, url_for, render_template, request, abort
from newsapi import NewsApiClient
import collections

app = Flask(__name__)

@app.route('/')
def index():
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')

   top_headlines = newsapi.get_top_headlines(q='', sources='cnn', language='en')
   wordFreq = {}
   tmp = ''
   for i in range(len(top_headlines['articles'])):
      tmp += top_headlines['articles'][i]['title']
   tmp = tmp.split()

   file1 = open("stopwords_en.txt", "r")
   stopwords_en = file1.read().splitlines()
   file1.close()

   for word in tmp:
      if word not in stopwords_en:
         if word in wordFreq:
            wordFreq[word] += 1
         else:
            wordFreq[word] = 1
   wordFreq = sorted(wordFreq.items(), key=lambda kv: kv[1], reverse=True)
   #print(wordFreq)


   cnn_top_headlines = newsapi.get_top_headlines(q='', sources='cnn', language='en')
   #print(cnn_top_headlines)
   fox_news_top_headlines = newsapi.get_top_headlines(q='', sources='fox-news', language='en')
   
   headlines = {'top_headlines':top_headlines,\
      'cnn_top_headlines':cnn_top_headlines,\
      'fox_news_top_headlines':fox_news_top_headlines,\
      'wordFreq':wordFreq}
   #print((top_headlines))
   #sources = newsapi.get_sources()
   #print(sources)
   #return ""
   return render_template('home.html', headlines = headlines)

@app.route('/search')
def searchNews():
   print("Get user news")
   return ''

if __name__ == '__main__':
   app.run(debug = True)
