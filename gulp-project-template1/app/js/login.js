require(["config"],function(){
	require(["header","footer","denglu"],function(header,footer,code){
		header.init();
		footer.init();
		code.init();
		var arr = [false];
		$("#hh").submit(function(e){
			var isSubmit = arr.every(function(item){
				return item == true;
			})
			if(!isSubmit){
				alert("请输入正确信息！")
			}else{
				$.ajax({
					"url":"http://localhost/gulp-project-template/API/vi/login.php",
					method:"GET",
					success:function(data){
						var data = data;
						var flag = false;
						for(var i = 0;i < data.length;i++){
							if(data[i].username == $("#ipt1").val() && data[i].password == $("#ipt2").val()){
								flag = true;
								if(flag){
									alert("登录成功，将要跳转到商城！");
									setTimeout(function(){
										window.location = "/html/store.html";
									},1500)
								};
							}
						}
						if(!flag){
							alert("用户名或密码错误");
						}
					},
					data:{
						"username":$("#ipt1").val(),
						"password":$("#ipt2").val()
					},
					dataType:"json"
				})
			}
			e.preventDefault();
		});

		$("#ipt3").blur(function(){
			var str = $("#wrap").html();
			if($("#ipt3").val().toLowerCase() == str.toLowerCase()){
				arr[0] = true;
			}else{
				arr[0] = false;
			}
		});
	})
})