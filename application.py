from flask import Flask, redirect, url_for, render_template, request, abort, jsonify
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
   return render_template('home.html', headlines = headlines)

@app.route('/search', methods=['GET', 'POST'])
def searchNews():
   """
   print(request.form['keyword'])
   print(request.form['fromDate'])
   print(request.form['toDate'])
   print(request.form['category'])
   print(request.form['source'])

   """
   q = request.form['keyword']
   sources = '' if request.form['source'] == "all" else request.form['source']
   from_param = request.form['fromDate']
   to = request.form['toDate']
   print(from_param)
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')
   all_articles = newsapi.get_everything(\
      q=q,\
      sources=sources,\
      from_param=from_param,\
      to=to,\
      language='en',\
      sort_by='publishedAt',\
      page=5)
   print(all_articles)
   return jsonify(all_articles)
   """
   try:
      all_articles = newsapi.get_everything(\
         q='bitcoin',\
         sources='cnn',\
         from_param='2019-12-01',\
         to='2019-12-12',\
         language='en',\
         sort_by='publishedAt',\
         page=2)
      print(all_articles)
   except:
      pass
   """

@app.route('/requestSource', methods=['GET', 'POST'])
def requestSource():
   newsapi = NewsApiClient(api_key='c2174dfb402940cab6d1829c14225861')
   sources = newsapi.get_sources(category=request.form['category'], country='us', language='en')
   #print(sources['sources'])
   result = []
   for i in range(len(sources['sources'])):
      result.append(sources['sources'][i]['name'])
      #print(sources['sources'][i]['name'])

   return jsonify(result)

if __name__ == '__main__':
   app.run(debug = True)
