function topNews() {
    // Change class
    document.getElementById("searchNews").classList.remove("active");
    document.getElementById("topNews").classList.add("active");

    // Get top news
}

function searchNews() {
    // Change class
    document.getElementById("topNews").classList.remove("active");
    document.getElementById("searchNews").classList.add("active");

    // Get user search
}

var result = {'status': 'ok', 'totalResults': 10, 'articles': [{'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Analysis by Zachary B. Wolf, CNN', 'title': 'An emboldened Trump is greeted by a few rebukes -- but so many others stay silent', 'description': "Attorney General William Barr snapped back after days of watching critics argue that his complacency and silence amid rising concern about President Donald Trump's influence over the Department of Justice were undermining the entire American system.", 'url': 'http://us.cnn.com/2020/02/14/politics/what-matters-february-13/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213163906-01-barr-lead-image-super-tease.jpg', 'publishedAt': '2020-02-14T05:04:09Z', 'content': ''}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': '', 'title': 'Congressman: This is about Trump showing his power  - CNN Video', 'description': "Rep. Eric Swalwell (D-CA) tells CNN's Anderson Cooper that President Trump is sending a message about his control over the Department of Justice.", 'url': 'http://us.cnn.com/videos/politics/2020/02/14/eric-swalwell-barr-stone-trump-tweets-ac-vpx.cnn', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213212126-eric-swalwell-ac-02132020-super-tease.jpg', 'publishedAt': '2020-02-14T03:07:59.9012787Z', 'content': "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Opinion by Frida Ghitis', 'title': 'Trump is learning from the dictators', 'description': 'When the President tweeted his objection to the sentencing recommendation for his Roger Stone, and Attorney General William Barr then quickly reversed the recommendation, they were following along a well-trod path across history, writes Frida Ghitis.', 'url': 'http://us.cnn.com/2020/02/13/opinions/trump-takes-americans-for-fools-ghitis/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213154223-trump-barr-for-ghitis-oped-super-tease.jpg', 'publishedAt': '2020-02-14T02:21:39Z', 'content': 'Frida Ghitis, a former CNN producer and correspondent, is a world affairs columnist. She is a frequent opinion contributor to CNN, a contributing columnist to the Washington Post and a columnist for World Politics Review. Follow her on Twitter @fridaghitis. T… [+6971 chars]'}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Jacqueline Howard, CNN', 'title': "CDC director: Novel coronavirus 'is probably with us beyond this season, beyond this year'", 'description': 'As an outbreak of a novel coronavirus has swept through Hubei province, China, the US Centers for Disease Control and Prevention has been preparing for its worst case scenario -- a widespread outbreak of illnesses in the United States.', 'url': 'http://us.cnn.com/2020/02/13/health/coronavirus-cdc-robert-redfield-gupta-intv/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213175729-01-coronavirus-0213-super-tease.jpg', 'publishedAt': '2020-02-14T01:31:05Z', 'content': '(CNN)As an outbreak of a novel coronavirus has swept through Hubei province, China, the US Centers for Disease Control and Prevention has been preparing for its worst case scenario -- a widespread outbreak of illnessesin the United States.\r\n"Right now we\'re i… [+6416 chars]'}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Rishi Iyengar, CNN Business', 'title': 'Jeff Bezos just dropped $165 million on a new Beverly Hills mansion', 'description': "The world's richest man is on a real estate binge.", 'url': 'http://www.cnn.com/2020/02/13/tech/jeff-bezos-mansion-beverly-hills/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213161811-jeff-bezos-0919-file-super-tease.jpg', 'publishedAt': '2020-02-13T23:57:06Z', 'content': ''}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Marshall Cohen, CNN', 'title': 'Trump contradicts past denials, admits sending Giuliani to Ukraine', 'description': 'Emboldened after his impeachment acquittal, President Donald Trump now openly admits to sending his attorney Rudy Giuliani to Ukraine to find damaging information about his political opponents, even though he strongly denied it during the impeachment inquiry.', 'url': 'http://us.cnn.com/2020/02/13/politics/trump-rudy-giuliani-ukraine-interview/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/191012134844-01-giuliani-super-tease.jpg', 'publishedAt': '2020-02-13T23:49:15Z', 'content': 'Washington (CNN)Emboldened after his impeachment acquittal, President Donald Trump now openly admits to sending his attorney Rudy Giuliani to Ukraine to find damaging information about his political opponents, even though he strongly denied it during the impe… [+2775 chars]'}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Peter Bergen, CNN National Security Analyst', 'title': 'Trump faces revolt of the generals', 'description': 'We have come to an extraordinary moment in the United States when some of the most senior retired military leaders in the country are publicly taking President Trump to task, writes Peter Bergen.', 'url': 'http://us.cnn.com/2020/02/13/opinions/john-kelly-revolt-generals-bergen/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/180718104553-01-john-kelly-07-18-2018-super-tease.jpg', 'publishedAt': '2020-02-13T23:45:40Z', 'content': 'Peter Bergen is CNN\'s national security analyst, a vice president at New America and a professor of practice at Arizona State University. His new book is "Trump and His Generals: The Cost of Chaos." The opinions expressed in this commentary are his own. View … [+4236 chars]'}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Analysis by Gloria Borger, CNN Chief Political Analyst', 'title': 'Trump has paralyzed both sides now', 'description': 'As President Donald Trump continues to live out his revenge fantasies against his critics, the reactions are predictable: Democratic outrage and Republican evasion.', 'url': 'http://us.cnn.com/2020/02/13/politics/donald-trump-revenge-fantasies-column/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200213163505-trump-0207-super-tease.jpg', 'publishedAt': '2020-02-13T22:01:54Z', 'content': ''}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': '', 'title': "GOP Sen Lisa Murkowski says it appears Trump hasn't learned anything from impeachment - CNN Video", 'description': 'Republican Sen. Lisa Murkowski says there have not been indicators that President Trump has learned any lessons from being impeached.', 'url': 'http://us.cnn.com/videos/politics/2020/02/13/gop-senator-trump-hasnt-learned-from-impeachment-nr-vpx.cnn', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/200131132404-03-murkowski-0129-super-tease.jpg', 'publishedAt': '2020-02-13T21:38:45.789667Z', 'content': "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."}, {'source': {'id': 'cnn', 'name': 'CNN'}, 'author': 'Evan Perez, Manu Raju and Jeremy Herb, CNN', 'title': "Federal prosecutors in Pittsburgh vetting Giuliani's Ukraine allegations", 'description': "The Ukraine allegations that President Donald Trump's personal attorney Rudy Giuliani is providing to the Justice Department are being vetted by investigators in the US Attorney's Office in Pittsburgh, two US law enforcement officials said.", 'url': 'http://us.cnn.com/2020/02/11/politics/pittsburgh-giuliani-ukraine-allegations/index.html', 'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/191206103741-01-rudy-giuliani-file-2018-super-tease.jpg', 'publishedAt': '2020-02-11T20:25:25Z', 'content': "(CNN)The Ukraine allegations that President Donald Trump's personal attorney Rudy Giuliani is providing to the Justice Department are being vetted by investigators in the US Attorney's Office in Pittsburgh, two US law enforcement officials said.\r\nThe official… [+4449 chars]"}]};
function show(param_div_id, top_headlines) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
    
    var i;
    for (i = 1; i < 5; i++) {
        var content = '<img src="' + result['articles'][i]['urlToImage'] + '" alt="Missing Img">';
        content += '<h1>' + result['articles'][i]['title'] + '</h1>';
        content += '<p>' + result['articles'][i]['description'] + '</p>';
        document.getElementById('cnnNews'+i).innerHTML = content;
        document.getElementById('cnnNews'+i+'_url').href=result['articles'][i]['url'];
    }

    for (i = 1; i < 5; i++) {
        var content = '<img src="' + result['articles'][i]['urlToImage'] + '" alt="Missing Img">';
        content += '<h1>' + result['articles'][i]['title'] + '</h1>';
        content += '<p>' + result['articles'][i]['description'] + '</p>';
        document.getElementById('foxNewsNews'+i).innerHTML = content;
        document.getElementById('foxNewsNews'+i+'_url').href=result['articles'][i]['url'];
    }
}


var resultContent = '';
var content_1_5 = '';
var content_6_15 = '';
function searchNews() {
    resultContent = '';
    content_1_5 = '';
    content_6_15 = '';
    var i;
    for (i = 1; i < 6; i++) {
        content_1_5 += '<div id="block'+i+'" class="block" onclick="expandBlock(this.id)">';
        content_1_5 += '<img src="' + result['articles'][i]['urlToImage'] + '" alt="Missing Img">';
        content_1_5 += '<h4>'+result['articles'][i]['title'] + '</h4>';
        content_1_5 += '<p>'+result['articles'][i]['description'] + '</p>';
        content_1_5 += '</div>';
    }
    for (i = 6; i < 16; i++) {
        content_6_15 += '<div id="block'+i+'" class="block" onclick="alert("ssss")">';
        content_6_15 += '<p>asdfghjkl</p>';
        content_6_15 += '</div>';
    }
    showLess();
}
function expandBlock(clicked_id) {
    var content = '';
    content += '<img src="' + result['articles'][clicked_id.slice(-1,clicked_id.length)]['urlToImage'] + '" alt="Missing Img">';
    content += '<h4>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['title'] + '</h4>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['author'] + '</p>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['source']['name'] + '</p>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['publishedAt'] + '</p>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['description'] + '</p>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['url'] + '</p>';
    document.getElementById(clicked_id).innerHTML = content;
}
function collapseBlock(clicked_id) {
    var content = '';
    content += '<img src="' + result['articles'][clicked_id.slice(-1,clicked_id.length)]['urlToImage'] + '" alt="Missing Img">';
    content += '<h4>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['title'] + '</h4>';
    content += '<p>'+result['articles'][clicked_id.slice(-1,clicked_id.length)]['description'] + '</p>';
    document.getElementById(clicked_id).innerHTML = content;
}

function clearNews() {
    document.getElementById('resultArea').textContent = '';
}

function showMore() {
    resultContent = content_1_5;
    resultContent += content_6_15;
    document.getElementById('resultArea').innerHTML = resultContent;
}

function showLess() {
    resultContent = content_1_5;
    document.getElementById('resultArea').innerHTML = resultContent;
}