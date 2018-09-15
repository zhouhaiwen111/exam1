require(["config"],function(){
	require(["header","footer"],function(header,footer){
		console.log(123);
		header.init();
		footer.init();
		
	})
})