window.onload=function(){
         var oDiv=document.getElementById('goodwine-box');
         var oUl=oDiv.getElementsByTagName('ul')[0];
         var aLi=oUl.getElementsByTagName('li');
         var timer=null;
         var iSpeed=10;
	 	 oUl.innerHTML+=oUl.innerHTML;//将原有的Ul增长一倍，实现圆的循环
	     oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';//两组u来的长度
         timer=setInterval(function(){
            fnMove();
         },200);
         function fnMove(){
         	if(oUl.offsetLeft<-oUl.offsetWidth/2){
         		oUl.style.left=0;
         	}else if(oUl.offsetLeft>0){
         		oUl.style.left=-oul.offsetWidth/2+'px';
         	}
         	oUl.style.left=oUl.offsetLeft-iSpeed+'px';
         }
}