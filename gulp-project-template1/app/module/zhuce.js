define(function(){
	function Register(){};
	Register.prototype.init = function(){
		
			var inp = document.getElementById("ipt1"),
				inp1 = document.getElementById("ipt2"),
				sp1 = document.getElementById("sp1"),
				sp2 = document.getElementById("sp2"),
				oForm = document.getElementById("ff");
				var arr = [false,false];
			document.getElementById("ff").onsubmit = function(e){
					
			var username = document.getElementById("ipt1").value.trim();
			var password = document.getElementById("ipt2").value.trim();
			var isSubmit = arr.every(function(item){
						return item == true;
				})
					if(!isSubmit){	
						e.preventDefault();
					}else{
						$.ajax({
							type: "GET",
							url:"http://localhost/gulp-project-template/API/vi/register.php",
							data:{
								"username":username,
								"password":password
							},
							dataType:"json",
							success:function(data){
								if(data.code){
									alert("成功！请点击登录");
									console.log(1);
								}else{
									alert("失败！请重新创建账号");
									console.log(0);
								}
							}
						});
					}
			
			e.preventDefault();
		}	
			inp.onblur=function(){
				var str = this.value;
				var reg = /^[1][\d]{10}$/;
				if(reg.test(str)){
					arr[0] = true;
					sp1.style.display = "none";
				}else{
					arr[0] = false;
					sp1.style.display = "block";
				}
			}
			inp1.onblur=function(){
				var str = this.value;
				var reg = /^.{6,}$/;
				if(reg.test(str)){
					arr[1] = true;
					sp2.style.display = "none";
				}else{
					arr[1] = false;
					sp2.style.display = "block";
				}
			}
			
			
	}
	return new Register();
});