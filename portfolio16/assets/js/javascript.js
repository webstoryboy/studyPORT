    // html dom 이 다 로딩된 후 실행된다.
    $(document).ready(function(){
		$('#section5 nav.actions a').click(function () {
            var actionUrl = $(this).attr('data-tab')+'.html';
			var actionTab = $(this).attr('data-tab');
            
            // $('.java-menu li').removeClass('on');
            // $('.' + actionTab).addClass('on');
            $('.java-menu iframe').detach();
            $('.java-menu').append('<iframe src="./html/javascript/' + actionUrl +'" frameborder="0"></iframe>');
            $('.java-menu iframe').addClass(actionTab).fadeIn( "slow" );
        });
    });

    
