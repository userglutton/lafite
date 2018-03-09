$(function(){
	var picHeight=300;
	var num=0;//margin-top的高度
	$('#goodwine-box .sLeft li').mouseenter(function(){
		var num=$(this).index()*picHeight;
		//console.log(num);
		$('#goodwine-box .go').stop().animate({'margin-top':-num+'px'},400);
		$('#goodwine-box ul li').removeClass('on');
		$(this).addClass('on');
	}) 
	$('#goodwine-box .sRight li').mouseenter(function(){
		var n=$(this).index()+$('#goodwine-box .sRight li').length;
		var num=picHeight*n;
		$('#goodwine-box .go').stop().animate({'margin-top':-num+'px'},400);
		$('#goodwine-box ul li').removeClass('on');
		$(this).addClass('on');
	}); 


/**********************************代码优化*******************************************/

    /*var num=0;
    var picHeight=300;
    $('li').mouseenter(function(){
        var n=$('li').index(this);
		var num=picHeight*n;
		$('#goodwine-box .go').stop().animate({'margin-top':-num+'px'},400);
		$('#goodwine-box ul li').removeClass('on');
		$(this).addClass('on');
		//console.log(n);
    });*/
});