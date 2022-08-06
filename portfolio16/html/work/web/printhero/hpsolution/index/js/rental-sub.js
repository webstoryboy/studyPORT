

$(document).ready(function(){

	
	
		//상품상세 이미지 변경
	var $productPictures = $('.product_pictures'),
		$productPicturesMini = $('.product_pictures_mini'),
		$bigImg = $productPictures.find('.big_img'),
		$thumbImgList = $productPicturesMini.find('tr td');

		$thumbImgList.click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			var targetImgPath = '../images/' + $(this).find('img').attr('data-target');
			$bigImg.attr('src',targetImgPath);

		});
	
	    //상품수량 가격변경하기
	var $quantity = $('.quantity'),
		$unitprice = $quantity.attr('.data-unitprice'),
		$qtyBtn = $quantity.find('.sit_qty'),
		$qtyInput= $quantity.find('input'),
		$targetTotal = $('.company-price .price');
	
	$qtyBtn.click(function(){
		
		var currentCount = $qtyInput.val();
		
		if($(this).hasClass('plus')){
			currentCount++;
			$qtyInput.val(currentCount);
		
		}else{
			if(currentCount > 1){
			currentCount--;
			$qtyInput.val(currentCount);
			}
		}
	});
	
	//파일넣기
	var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function() { // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        }

        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename);
    });
	
	
    var imgTarget = $('.preview-image .upload-hidden');

    imgTarget.on('change', function() {

    var parent = $(this).parent();
    parent.children('.upload-display').remove();


    if (window.FileReader) {
        //image 파일만 

        if (!$(this)[0].files[0].type.match(/image\//)) return;

        var reader = new FileReader();
        reader.onload = function(e) {
            var src = e.target.result;
            parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
        }
        reader.readAsDataURL($(this)[0].files[0]);
    } else {

        $(this)[0].select();
        $(this)[0].blur();

        var imgSrc = document.selection.createRange().text;
        parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

        var img = $(this).siblings('.upload-display').find('img');
        img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
    }

	});
	$(window).scroll(function() {
	 //탑서칭
	var $el = $('.top-search-show-on-scroll');
	if($(this).scrollTop() >= 500) $el.addClass('shown');
	else $el.removeClass('shown');
	
	
    //고정배너 스크립트
	var $el = $('.show-on-scroll');
	if($(this).scrollTop() >= 600) $el.addClass('shown');
	else $el.removeClass('shown');
});
	 




}); //document ready function













	
