
var feeds = new Set();

$('.content').feeds({
  feeds: {
    Mozilla: 'http://hacks.mozilla.or.kr/feed/'
  },
  
  preprocess: function ( feed ) {


    feeds.add(feed);

    var rssParam = getUrlParameter('feed');
    
    // feed 파라미터가 적혀있지 않으면 모두 본다.
    if(rssParam == undefined) {
      
      // 14일 지난건 버림
      var today = new Date();
      var pubDate = new Date(this.publishedDate);
      var during = today.getTime() - pubDate.getTime();
      if(during > 14 * 24 * 60 * 60 * 1000) { // 일시분초밀리초
        return false;
      }
    }
    else {
      // display only one source
      if(rssParam !== feed.feedUrl) {
        return false;
      }
    }
  },
  // 각 글을 어떻게 표시할지 구현하는 함수
  entryTemplate: function(entry) {
    
    var template = 
        '<div class="entry">' +
          '<div><span><!=feedTitle!></span></div>' +
          '<div><span><!=publishedDate!></span></div>' +
          '<div><a href="<!=link!>" target="_blank"><h3><!=title!></h3></a></div>' +
          '<div><p><!=contentSnippet!></p></div>' +
        '</div>';
    
    return this.tmpl(template, entry);
  },
  // 모든 작업이 다 끝나면 호출된다.
  onComplete: function(entries) {

    // Set에 넣어놨던걸 메뉴에 추가한다.
    // Set이라서 등록한 순서와는 다를 수 있다. 크게 문제되지 않는다.
    feeds.forEach(function(item){
      var menuDom = '<core-item><div><a href="?feed=' + item.feedUrl + '">'+ item.title + '</a></div></core-item>';
      $('#menu').append(menuDom);
    });    
  }
});

// URL 파라미터의 값을 얻는다.
// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery
function getUrlParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}