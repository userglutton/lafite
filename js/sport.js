$(function(){
	var bool=true;
	if(bool){
		$('.rMwnu').click(function(){
			$('#rMenu').show();
			bool=false;
		});
	}else{
		$('#rMenu').hide();
		bool=true;
	}
	
});