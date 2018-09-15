require(["config"],function(){
	require(["detail","header","footer"],function(Tab,header,footer){
//		console.log(1);
		Tab.change();
		header.init();
		footer.init();
		
	})
})