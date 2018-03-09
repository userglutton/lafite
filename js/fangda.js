
		var oUl=document.getElementById('goodwine-box');
		var oLi=document.getElementsByTagName('li');
		var iMinIndex=2;
		for(var i=0;i<oLi.length;i++){//给每个li块设置定位坐标
			oLi[i].style.left=oLi[i].offsetLeft+'px';
			oLi[i].style.top=oLi[i].offsetTop+'px';
		}
		for(var j=0;j<oLi.length;j++){//指定定位类型，清除影响定布局的margin
			oLi[j].style.position='absolute';
			oLi[j].style.margin=0;
		}
		for(var i=0;i<oLi.length;i++){
			oLi[i].onmouseover=function(){
				this.style.zIndex=iMinIndex++;
				startMove(this,{width:200,height:200,marginLeft:-50,marginTop:-50});
			}
			oLi[i].onmouseout=function(){
				startMove(this,{width:100,height:100,marginLeft:0,marginTop:0});
			}
		}
