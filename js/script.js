$(document).ready(function(){
	$(document).on('click', '.list > li',function(){
		$(this).remove();
		$('.cart').append($(this));
	});

	$('#add').click(function(){
		$('.list').append('<li>' + $('#input-box').val() + '</li>');
		$('#input-box').val("");
	});

	$('#clear').click(function(){
		$('.cart li').remove();
	});
});
