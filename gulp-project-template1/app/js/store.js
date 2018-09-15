require(["config"],function(){
	require(["header","footer"],function(header,footer){
		header.init();
		footer.init();
		console.log(123)
		$.ajax({
			type:"get",
			url:"http://localhost/gulp-project-template/API/vi/select.php",
			dataType:"json",
			success:function(data){
				$.each(data,function(i,val){
					console.log(val);
				$(".c1 ul li:eq("+i+")>a").attr("href","/html/detail.html?id="+val.id);
					
				})
				
				$(".c1 ul li .pic1").attr("src","/images/store/"+data[0][1]);
				$(".c1 ul li .word1").html(data[0][0]);
				$(".c1 ul li .price .sale-price").html(data[0][2]);
				$(".c1 ul li .pic4").attr("src","/images/store/"+data[1][1])
				$(".c1 ul li .word2").html(data[1][0]);
				$(".c1 ul li .price2 .sale-price").html(data[1][2]);
				$(".c1 ul li .pic6").attr("src","/images/store/"+data[2][1]);
				$(".c1 ul li .word1").html(data[2][0]);
				$(".c1 ul li .price .sale-price").html(data[2][2]);
				$(".c1 ul li .pic7").attr("src","/images/store/"+data[3][1]);
				$(".c1 ul li .word3").html(data[3][0]);
				$(".c1 ul li .price .sale-price").html(data[3][2]);

			}

		})
		var height1 = $(".nav").scrollTop();
		
		window.onscroll = function(){
			var height2 =  document.documentElement.scrollTop || document.body.scrollTop;
			if (height2>height1) {
				$(".nav").className = "nav";
			}else{
				$(".nav").className = "";
			}
		}
	});
});