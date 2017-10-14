
 
/*<!-- external-link --> *
 *<script type="text/javascript">*/
$(function(){
	/*$("a[href^='http://']").attr("target","_blank");*/
	$('a[target="_blank"]').after(' <i class="fa fa-external-link"></i>');
});
/*</script>*
 *<!-- /external-link -->*/


/*<!-- smoothscroll --> *
 *<script type="text/javascript">*/
$(function(){

	/* smoothscroll start */
	var $body = $('body'),
	$slide_menu_btn_icon = $("#slide_menu_btn_icon"),
	$accontents = $('#slide_menu .accontents');
	$acitem = $('#slide_menu .acitem');
    $('a[href^=#]').click(function(){
    	if($(this).hasClass("acitem_lv1")){
    	$accontents.hide();
    	$acitem.removeClass("acopen");
    	}
        $body.removeClass('slide_open');
        $slide_menu_btn_icon.removeClass("close");
        var speed = 800;
        var myHref= $(this).attr("href");
        var winWidth = $(window).width();
        if( winWidth < 800) {
          var myPos = $(myHref).offset().top - 50;
          $("html, body").animate({scrollTop:myPos}, speed, "easeInOutCubic");
        } else {
          var myPos = $(myHref).offset().top - 50;
          $("html, body").animate({scrollTop:myPos}, speed, "easeInOutCubic");
        }
        return false;
    });
    /* smoothscroll end */
});
/*</script>*
 *<!-- /smoothscroll -->*/


/*<!-- pagetop -->*
 *<script type="text/javascript">*/
$(function() {
	/* pagetop-smoothscroll start */
	var topBtn = $('#page-top');
	//topBtn.hide();
    $(window).on('scroll', function() {
        scrollDirection();
    });
    $('body').on('touchmove', function() {
        scrollDirection();
    });
	
	function scrollDirection(){
		if ($(this).scrollTop() > 100) {
			topBtn.addClass("wscroll");
			//topBtn.fadeIn();
		} else {
			topBtn.removeClass("wscroll");
			//topBtn.fadeOut();
		}
		if ($(this).scrollTop() > 1) {
			$("#nav-wrap").addClass("wscroll");
		} else {
			$("#nav-wrap").removeClass("wscroll");
		}
	}
    topBtn.on('touchstart click', function () {
		$('body,html').animate({scrollTop: 0}, 800, "easeInOutCubic");
		return false;
    });
});
/*</script>*
 *<!-- /pagetop -->*/


/*<!-- slide_menu -->*
 *<script type="text/javascript">*/
			$(function () {
				var $body = $('body'),
				$slide_menu_btn_icon = $("#slide_menu_btn_icon"),
				$overlay = $('#overlay');
				$('#slide_menu_btn').on('touchstart click', function (event) {
					event.preventDefault();
					$slide_menu_btn_icon.toggleClass("close");
					$body.toggleClass('slide_open');
					$overlay.on('click', function () {
						$body.removeClass('slide_open');
						$slide_menu_btn_icon.removeClass("close");
					});
				});
			});
/*</script>*
 *<!-- /slide_menu -->*/

/*<!-- accordion -->*
 *<script type="text/javascript">*/
$(function () {
	
	$("#slide_menu").on("click",".acitem",function(){
		$(this).toggleClass("acopen");
		$(this).siblings(".acitem").removeClass("acopen");
		$(this).siblings(".accontents").children(".acitem").removeClass("acopen");
		$(this).next().slideToggle(300);
		$(this).next().children(".accontents").slideUp(300);
		$(this).next().siblings(".accontents").slideUp(300).children(".accontents").slideUp(300);
	});
});
/*</script>*
 *<!-- /accordion -->*/





/*<!-- 以上javascript/jquery関係 -->*/