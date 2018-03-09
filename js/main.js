$(function(){
	var num=$('.box_img ul li a').size();
	var index=0;//自动播放
	var temp=0;//鼠标经过能正常播放
	var timer=null;
	for(var i=1;i<=num;i++){
		$('.box_tab').append("<a href='javascript:void;'>"+i+"</a>");
	}
	$('.box_img ul li').eq(0).show();
	$('.box_tab a').eq(0).addClass('active');
	$('.box_tab a').mouseover(function(){
		var temp=$(this).index();
		index=temp;
		$(this).addClass('active').siblings().removeClass('active');
		var i=$(this).index();
		$('.box_img ul li').eq(i).stop().fadeIn().siblings().fadeOut();
	});
	timer=window.setInterval(move,1000);
	function move(){
		index++;
		if(index==num){
			index=0;
		}
		$('.box_img ul li').eq(index).fadeIn().siblings().fadeOut();
		$('.box_tab a').eq(index).addClass('active').siblings().removeClass('active');
	}
	$('.box_img').hover(function(){
		clearInterval(timer);
	},function(){
		timer=window.setInterval(move,1000);
	});
});