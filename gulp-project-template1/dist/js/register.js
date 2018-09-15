require(['config'],function(){
	require(['zhuce','header','footer'],function(zhuce,header,footer){	
		zhuce.init();
		header.init();
		footer.init();
		

	})
})