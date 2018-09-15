define(function(){
	function Xiding(){};
	Xiding.prototype.init = function(){
		var nav = $(".nav");
		$(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            if(offset.top<scrollTop){
              nav.css({"position":"fixed","top": "0"});
              serch.css({"display":"none"});
              atama.css({"display":"block"});
            }else{
              nav.css({"position":"relative"});
              serch.css({"display":"block"});
              atama.css({"display":"none"});
            }
          });
		
	}
	
	return new Tab();
})
















