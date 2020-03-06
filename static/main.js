
var wordFreq;
function showWordCloud() {
    // List of words
    var myWords = []//{word: "Running", size: "20"},
    //{word: "Surfing", size: "20"},
    //{word: "Climbing", size: "50"},
    //{word: "Kiting", size: "30"},
    //{word: "Sailing", size: "15"},
    //{word: "Snowboarding", size: "20"} ]
    
    for (var i = 0; i < 30; i++) {
        myWords.push({word: wordFreq[i][0], size: i});
    }

    // set the dimensions and margins of the graph
    var margin = {top: 1, right: 1, bottom: 1, left: 1},
    width = 200 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#wordsCloud").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = d3.layout.cloud()
    .size([width, height])
    .words(myWords.map(function(d) { return {text: d.word, size: d.size}; }))
    .padding(3) //space between words
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .fontSize(function(d) { return d.size; })      // font size of words
    .on("end", draw);

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
        svg
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", "black")
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
        .text(function(d) { return d.text; });
    }

    layout.start();
}

var slideTopNewsIndex = 0;
var timerSetVar;
function showSlideTopNews() {
    if (slideTopNewsIndex == 5) {slideTopNewsIndex = 0;}

    document.getElementById("slideNewsUrl").setAttribute('href', result['articles'][slideTopNewsIndex]['url'])
    document.getElementById("slideNewsImg").src = result['articles'][slideTopNewsIndex]['urlToImage'];
    document.getElementById("slideNewsTitle").innerHTML = result['articles'][slideTopNewsIndex]['title'];
    document.getElementById("slideNewsDescription").innerHTML = result['articles'][slideTopNewsIndex]['description'];
    
    timerSetVar = setTimeout(showSlideTopNews, 2000); // Change image every 2 seconds
    slideTopNewsIndex++;
}

var cnn_top_headlines;
var fox_news_top_headlines;

function resetSearchDate() {
    var toDate = new Date();
    var fromDate = new Date();
    fromDate.setDate(toDate.getDate() - 7)
    document.getElementById('from').value = fromDate.getFullYear()+"-"+(("0"+fromDate.getMonth()).slice(-2)) +"-"+ (("0"+(fromDate.getDate()+1)).slice(-2));
    document.getElementById('to').value = toDate.getFullYear()+"-"+(("0"+toDate.getMonth()).slice(-2)) +"-"+ (("0"+(toDate.getDate()+1)).slice(-2));
}
function updateResult(data) {
    result = data['top_headlines'];
    cnn_top_headlines = data['cnn_top_headlines'];
    fox_news_top_headlines = data['fox_news_top_headlines'];
    wordFreq = data['wordFreq'];
}
function switchFrame(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
    
    if (param_div_id == "newsFrame") {
        // TODO: Pull top news
        //alert(top_headlines);

        // Show slide news
        showSlideTopNews();

        // TODO: Show cloud words
        showWordCloud();
        
        // Show news cards
        var i;
        for (i = 1; i < 5; i++) {
            var content = '<img src="' + cnn_top_headlines['articles'][i]['urlToImage'] + '" alt="Missing Img">';
            content += '<h1>' + cnn_top_headlines['articles'][i]['title'] + '</h1>';
            content += '<p>' + cnn_top_headlines['articles'][i]['description'] + '</p>';
            document.getElementById('cnnNews'+i).innerHTML = content;
            document.getElementById('cnnNews'+i+'_url').href=cnn_top_headlines['articles'][i]['url'];
        }

        for (i = 1; i < 5; i++) {
            var content = '<img src="' + fox_news_top_headlines['articles'][i]['urlToImage'] + '" alt="Missing Img">';
            content += '<h1>' + fox_news_top_headlines['articles'][i]['title'] + '</h1>';
            content += '<p>' + fox_news_top_headlines['articles'][i]['description'] + '</p>';
            document.getElementById('foxNewsNews'+i).innerHTML = content;
            document.getElementById('foxNewsNews'+i+'_url').href=fox_news_top_headlines['articles'][i]['url'];
        }
    }
    else {
        getSource();
        clearTimeout(timerSetVar);
        resetSearchDate();
    }
}


//---------------------------------------------------------------------
function generateCollaseNewsBlockHTML(data, start, end) {
    var content = ""
    var i = 0;
    for (i = start; i <= end; i++) {
        content += '<div class="searchNewsResultBlock">';
        content += '<div class= "searchNewsResultBlockImg">';
        content += '<img src="' + data['articles'][i]['urlToImage'] + '" alt="Missing Img">';
        content += '</div>';

        content += '<div id="block'+i+'" class= "searchNewsResultBlockCollapseContent" onclick="expandBlock(this.id)">';
        content += '<h4 >'+data['articles'][i]['title'] + '</h4>';
        content += '<p>'+data['articles'][i]['description'] + '</p>';
        content += '</div>';

        content += '<div class= "searchNewsResultBlockClose">';
        content += '<button style="display: None;"id="closeButton'+i+'" onclick="collapseBlock(this.id)">&#10006</button>';
        content += '</div>';
        content += '</div>';
    }
    return content;
}

function getSource() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var newSource = JSON.parse(this.responseText);
            oldSource = document.getElementById("source");
            var i;
            for (i = oldSource.options.length - 1; i > 0; i--) {
                oldSource.remove(i);
            }

            var length = newSource.length;
            if (length > 10) length = 10;

            for (i = 0; i < length; i++)
            {
                var option = document.createElement("option"); 
                option.text = newSource[i];
                oldSource.add(option, oldSource[1]);
            }
        }
    }
    req.open('POST', '/requestSource', true);
    const data = new FormData()
    data.append('category', document.getElementById("categories").value)
    req.send(data);
}

var searchNewsResultContent = '';
var content = '';
var content_1_5 = '';
var content_6_15 = '';
var searchNewsResult = '';
function searchNews() {
    // TODO: Get user input and pull news
    var keyword, fromDate, toDate, category, source;
    keyword = document.getElementById("keyword").value;
    fromDate = document.getElementById("from").value;
    toDate = document.getElementById("to").value;
    category = document.getElementById("categories").value;
    source = document.getElementById("source").value;

    if( (new Date(toDate).getTime() < new Date(fromDate).getTime())) {
        alert("Incorrect time");
    }
    else {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                searchNewsResult = JSON.parse(this.responseText);
                if (searchNewsResult['status'] == 'error') {
                    alert(searchNewsResult['message']);
                }
                else if (searchNewsResult['articles'].length == 0) {
                    document.getElementById('searchNewsResultArea').innerHTML = "<br><p>No results</p>";
                    document.getElementById("showMoreLessButton").style.display = "none";
                }
                else {
                    searchNewsResultContent = '';
                    content_1_5 = generateCollaseNewsBlockHTML(searchNewsResult, 1, 5)
                    content_6_15 = generateCollaseNewsBlockHTML(searchNewsResult, 6, 15)
                    showLessNews();
                    document.getElementById("showMoreLessButton").style.display = "inline";
                }
            }
        }
        req.open('POST', '/search', true);
        const data = new FormData()
        data.append('keyword', keyword)
        data.append('fromDate', fromDate)
        data.append('toDate', toDate)
        data.append('category', category)
        data.append('source', source)
        req.send(data);
    }
}

function expandBlock(clicked_id) {
    //var index = clicked_id.slice(-1,clicked_id.length)
    var index = parseInt(clicked_id.replace(/[^0-9\.]/g, ''), 10);

    content = '';
    content += '<h4>' + searchNewsResult['articles'][index]['title'] + '</h4>';
    content += '<p><strong>Author: </strong>' + searchNewsResult['articles'][index]['author'] + '</p>';
    content += '<p><strong>Source: </strong>' + searchNewsResult['articles'][index]['source']['name'] + '</p>';
    var date = searchNewsResult['articles'][index]['publishedAt']
    var month = date.substring(5, 7)
    var day = date.substring(8, 10)
    var year = date.substring(0, 4)
    content += '<p><strong>Date: </strong>' + month+'/'+day+'/'+year + '</p>';
    content += '<p>' + searchNewsResult['articles'][index]['description'] + '</p>';
    content += '<p><a href="' + searchNewsResult['articles'][index]['url'] + '" target="_blank">See Original Post</a></p>';

    document.getElementById(clicked_id).className = "searchNewsResultBlockExpandContent";
    document.getElementById(clicked_id).innerHTML = content;
    document.getElementById('closeButton'+index).style.display = 'inline';
}

function collapseBlock(clicked_id) {
    //var index = clicked_id.slice(-1,clicked_id.length)
    var index = parseInt(clicked_id.replace(/[^0-9\.]/g, ''), 10);

    content = '';
    content += '<h4 >'+searchNewsResult['articles'][index]['title'] + '</h4>';
    content += '<p>'+searchNewsResult['articles'][index]['description'] + '</p>';

    document.getElementById('block'+index).className = "searchNewsResultBlockCollapseContent";
    document.getElementById('block'+index).innerHTML = content;
    document.getElementById('closeButton'+index).style.display = 'None';
}

function clearFormNews() {
    document.getElementById("searchForm").reset();
    resetSearchDate();
    getSource();
    document.getElementById('searchNewsResultArea').textContent = '';
    document.getElementById("showMoreLessButton").style.display = "none";
}

function showMoreNews() {
    searchNewsResultContent = content_1_5;
    searchNewsResultContent += content_6_15;
    document.getElementById('searchNewsResultArea').innerHTML = searchNewsResultContent;
    document.getElementById('showMoreLessButton').innerHTML = "Show Less";
    document.getElementById('showMoreLessButton').onclick = showLessNews;
}

function showLessNews() {
    searchNewsResultContent = content_1_5;
    document.getElementById('searchNewsResultArea').innerHTML = searchNewsResultContent;
    document.getElementById('showMoreLessButton').innerHTML = "Show More";
    document.getElementById('showMoreLessButton').onclick = showMoreNews;
}

