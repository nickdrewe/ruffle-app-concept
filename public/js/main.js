$(document).ready(function(){

	$('.inbox-item').click(function(e) {  
		var background = $(this).css('backgroundColor');
		var items = [1, 2, 3, 4, 5, 6, 7];

		$('body').css('background-color', '#FFF');
		items.forEach(function(item){
			if(item < e.target.id){
				$('#' + item).css('background-color', background);
				$('#' + item).css('color', background);
				console.log($('#' + item).children());
				$('#' + item).children().css('font-size', '0px');
				$('#' + item).animate({ height: 0 }, 500);
				$('#' + item).css('text-shadow', 'none');
			}
			if(item == e.target.id){
				$('#' + item).css('height', '2000px');
				$( '#' + item ).animate({ marginTop: 2000 }, 500);
			}
			if(item > e.target.id){
				$('#' + item).css('display', 'none');
			}
			
		});
	});
});