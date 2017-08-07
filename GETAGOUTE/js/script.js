$(document).ready(function(){

$('.normal').click(function(){
	var source = $(this).attr('src');
	$('.main').attr('src',source);
});

});