define(function(){
	function Header(){}
	Header.prototype.init = function(){
		$(".head").load("/html/header.html #header",function(){
			
		})
	}
	return new Header();
})
