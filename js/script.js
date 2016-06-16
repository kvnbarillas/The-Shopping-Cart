$(document).ready(function(){
	$('.list > li').on('click',function(event){
		$(this).remove();
		$('.cart').prepend($(this));
	})

	$('.main-list > #button').click(function(event){
		

	})
});
