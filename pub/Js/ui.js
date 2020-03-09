/*
    함수명 : GNB, LNB Initialize
    작성자 : 장호연(http://eventjang.com)
    코멘트 - UL - LI 구조의 트리구조 메뉴 스크립트.
            - <img>의 src 변경없이 <li>의 클래스 변경만을 필요로 하는 유형에 사용함.
            - mouseover 와 onfocus 이벤트를 처리.
            - 활성화시 클래스는 'active'
*/
jQuery(document).ready(function () {

    //초기화 실행
    gnbInit(allmenuDep1, allmenuDep2);
    lnbInit(lnbDep1);

    //선택한 LNB를 active(활성화) 시킨다.
    function lnbInit(dep1) {
        $(".lnb ul > li").removeClass("active");
        $(".lnb ul > li:eq(" + (dep1 - 1) + ")").addClass("active");
    }

    //선택한 allmenu를 active(활성화) 시킨다.
    function gnbInit(dep1, dep2) {
        //  $(".allmenu > div > ul").hide();
        // $(".allmenu > div:eq(" + (dep1 - 1) + ") > ul").show();
        $(".allmenu > div").removeClass("active");
        $(".allmenu > div:eq(" + (dep1 - 1) + ")").addClass("active");
        $(".allmenu > div > ul > li").removeClass("active");
        if (dep2 != "") {
            $(".allmenu > div:eq(" + (dep1 - 1) + ") > ul > li:eq(" + (dep2 - 1) + ")").addClass("active");
        }
    }
	

});

//아코디언 메뉴 함수 호출 : acodian.click(''); 
var acodian = {
	click: function(target) {
		var $target = $(target);
		$target.on('click', function() {
			if ($(this).parent().hasClass('on')) {
				slideUp($target);
			} else {
				slideUp($target);
				$(this).parent().addClass('on').next().slideDown();
			}
			function slideUp($target) {
				$target.parent().removeClass('on').next().slideUp();
			}
			
		});
		
	}
};

// ASDIE ON
function asideOnOff(_this, id){
	var asideId = $(id);
	$('html, body').css('overflow', 'hidden');
	_this.addClass('on');
	asideId.stop().animate({'left':0});
}

//ASDIE OFF
function asideOff(_this, id){
	var asideId = $(id);
	$('html, body').css('overflow', '');
	_this.removeClass('on');
	asideId.stop().animate({'left':-100+"%"});
}

$(function(){

	// ASDIE ON
	$('.btn_slide').on('click', function(e){
		asideOnOff($(this), '#aside');
		e.preventDefault();
	});	
	
	// ASDIE OFF
	$('.btn_aside_off').on('click', function(e){
		asideOff($(this), '#aside');
		e.preventDefault();
	});
	
	$('.menu01.depth_01 li').each(function(index){
		$(this).on('click',  function(e){
			var _this = $(this);
			if(_this.hasClass('on')){
				_this.removeClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideUp();
			} else {
				$('.depth_01').find('li').removeClass('on');
				$(".depth_02").slideUp();
				_this.addClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideDown(); 
			}		 
			e.preventDefault();
		});
	});
		
	$('.menu02.depth_01 li').each(function(index){
		$(this).on('click',  function(e){
			var _this = $(this);
					
			if(_this.hasClass('on')){
				_this.removeClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideUp();
			} else {
				$('.depth_01').find('li').removeClass('on');
				$(".depth_02").slideUp();
				_this.addClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideDown(); 
			}	
		e.preventDefault();			
		});
	});
	$('.menu03.depth_01 li').each(function(index){
		$(this).on('click',  function(){
			var _this = $(this);
			$(".depth_02").hide();
			if(_this.hasClass('on')){
				_this.removeClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideUp();
			} else {
				$('.depth_01').find('li').removeClass('on');
				$(".depth_02").slideUp();
				_this.addClass('on');
				_this.parent().next().find(".depth_02").eq(index).slideDown(); 
			}		 		
		});

	});
	$('.menu03.depth_01 li').eq(0).on('click',  function(e){
		e.preventDefault();		
	});

	//aside메뉴 전체메뉴보기 클릭 시 전체메뉴 오픈
	$(".allmDep2").on('click',  function(){
		$(".allmenu").addClass("asideOpen");
		$(".allmenu").show();
		$(".allmenu_header").show();
		$(this).removeClass("on");
	});
	$(".allmenu_header .btn_back").on('click',  function(){
		$(".allmenu").removeClass("asideOpen");
		$(".allmenu").hide();
		$(".allmenu_header").hide();
	});
});

	
