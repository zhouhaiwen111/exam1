define(function(){
	function Footer(){}
	Footer.prototype.init = function(){
		$(".footer").load("/html/footer.html #footer",function(){
			
		})
	}
	return new Footer();
})
