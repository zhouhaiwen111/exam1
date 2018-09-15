define(function(){
	function Tab(){};
	Tab.prototype.change = function(){
		
		$(".nav>li").click(function(){
			var index = $(this).index();
			 var $li = $(".cont>li").eq(index);
			 $li.addClass("show");
			 $li.siblings().removeClass("show");
		})
	}
	
	return new Tab();
})