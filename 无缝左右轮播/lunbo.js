$(function() {
	 //封装函数.
	function move(){
		count++;
		if(count == len) {
			$("#banner").css("left", "0");
			count = 1;
		} 
		if(count == len-1){
			$("#list li").eq(0).addClass("red").siblings().removeClass("red")
		}
		if(count==-1){
			$("#banner").css("left",-perWidth*(len-1)+"px")
			count = len-2;
		}
		
		$("#banner").stop().animate({left: -perWidth * count + "px"}, 800);	 
		$("#list").find("li").eq(count).addClass("red").siblings().removeClass("red") 
		 
	}
	
	//无缝轮播  图片和角标同步
	var count = 0;
	var perWidth = $("#banner li").find("img").outerWidth();
	console.log(perWidth);
	var len = $("#banner li").length; 
	
	var timer = setInterval(function() {
		 move();
	}, 2000)
	
	//刷新页面第一个角标始终显示类名
	$("#list li").eq(0).addClass("red");

	//鼠标移入移出
	$("#scrollBanner").mouseenter(function() {
		clearInterval(timer)
	}).mouseleave(function() {
		timer = setInterval(function() {
			move();
	},2000)
	})
	
	//点击右角标 （与轮播方向相同）
	$("#jiaobiao span").eq(1).click(function() {
		move();
	})
	
	//点击左角标 （与轮播方向相反）
	$("#jiaobiao span").eq(0).click(function(){
		count-=2;
		move();
	})

	//鼠标移入角标 图片同步	
 	for(let j = 0;j<$("#list li").length;j++){
 		$("#list li").eq(j).mouseover(function(){ 
 			count = j - 1;
 			$(this).addClass("red").siblings().removeClass("red")
 			$("#banner").css("left",-perWidth*j+"px")
 			move();
 		})
	}
	
	
	 
})