$(function(){
	 var flag = true;
	$(window).scroll(function(){
		
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=30){
			$("#louti").fadeIn()
		}else{
			$("#louti").fadeOut()
		}
		if(flag){
		$("#tupian").find("div").each(function(){
			if(scrollTop>=$(this).offset().top-$(this).outerHeight()/2){
				var index = $(this).index();
				$("#louti").find("div").eq(index).addClass("red")
				.siblings().removeClass("red")
			}
		})
		}
	});
	
	$("#louti div:not(:last)").click(function(){
		flag = false;
		var index = $(this).index();
		$(this).addClass("red").siblings().removeClass("red")
		$("body,html").stop().animate({
			"scrollTop":$("#tupian div").eq(index).offset().top
		},500,function(){
			flag = true ;
		})
	});
	
	$("#louti div:last").click(function(){
		flag = false;
		$("body,html").stop().animate({
			"scrollTop":"0"
		},500,function(){
			flag = true;
		})
	});


})
	
