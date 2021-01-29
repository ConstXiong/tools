(function() {
	//subscribe();
	healthCompanies();
	setTimeout(function(){
		wow();
	},1000);
})();

//点赞
function wow() {
	var $span = $('#is-like-span');
	var t = $span.html();
	if (t == '点赞') {
		$span.click();
	}
}
//点赞
function wowByUrl() {
	var aid = getArticleId();
	if (aid) {
		$.ajax({
		  type: 'POST',
		  url: 'https://blog.csdn.net/phoenix/web/v1/article/like',
		  data: {articleId:aid}
		});
	}
}

//关注
function subscribe(){
	var $span = $('#btnAttent');
	if ($span.html() == '关注') {
		$span.click();
		$span.trigger("click");
	}
}
//关注
function subscribeByUrl(){
	var uid = getUname();
	var $span = $('#btnAttent');
	if (uid && $span.html() == '关注') {
		$.ajax({
		  type: 'POST',
		  url: 'https://me.csdn.net/api/relation/create?source=blog',
		  data: {username:uid}
		});
	}
}

//收藏
function collect() {
	
}

//评论
function comment() {

}

//三连
function healthCompanies() {
	if($('#health-companies').length == 1){
		$('#health-companies').click();
	}
}

function getArticleId() {
	var articleId = null;
	var u = window.location.href;
	articleId = u.substring(u.lastIndexOf('/')+1, u.lastIndexOf('?'));
	return articleId;
}

function getUname() {
	var uname = null;
	if ($('span[username]').length == 1) {
		uname = $('span[username]').attr('username');
	}
	return uname;
}