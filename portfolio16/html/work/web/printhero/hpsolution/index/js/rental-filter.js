$(document).ready(function(){

	//tab li 누르면 하단 내용 바뀌기

	$('ul.tab li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tab li').removeClass('active');
		$('.filter-board').removeClass('active');

		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});

	/*일반 필터
	var filterList = $('.sort-line input');
	var targetList = $('.rental-product .shop-class');

	
	filterList.click(function(){
		var targetValue = [];
		filterList.filter(':checked').each(function(){
				targetValue.push('.' + $(this).val());
			});
			var targetClass = targetValue.join(', ');

			targetList.hide();
			$(targetClass).fadeIn();

		});/filterList click */
	
	//isotope


	// store filter for each group
	var $filters = $('.sort-line input');
	var filters = {};

	var $grid = $('.rental-product').isotope({
		itemSelector: '.rental-product >.shop-class'
	});

	

	 $filters .click(function(){
		var $button =$(this);
		
		// get group key
		var $buttonGroup = $button.parents('div');
		var filterGroup = $buttonGroup.attr('data-filter-group');

		// set filter for group
		filters[ filterGroup ] = $button.val();

		// combine filters
		var filterValue = concatValues( filters );

		// set filter for Isotope
		$grid.isotope({ filter: filterValue });
		
		if($button.val() == '*'){

			$button.parent('.sort-line ').find('input').prop('checked',false);
			$button.prop('checked',true);
		}else{
			$button.parent('.sort-line ').find('input').eq(0).prop('checked',false);
			
			
		};
		
    });
	// flatten object by concatting values
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
		value += obj[ prop ];
		}
		return value;
	}



	


}); //document ready function



