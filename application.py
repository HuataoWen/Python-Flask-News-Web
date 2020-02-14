from flask import Flask, redirect, url_for, render_template, request, abort
from newsapi import NewsApiClient


app = Flask(__name__)

@app.route('/')
def index():
   print("hello")
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')
   cnn_top_headlines = newsapi.get_top_headlines(q='', sources='cnn', language='en')
   #fox_news_top_headlines = newsapi.get_top_headlines(q='', sources='fox-news', language='en')
   #fox_news_top_headlines = newsapi.get_top_headlines(q='', sources='', language='en')
   #print((fox_news_top_headlines))
   #sources = newsapi.get_sources()
   #print(sources)
   #return ""
   return render_template('home.html')

if __name__ == '__main__':
   app.run(debug = True)
