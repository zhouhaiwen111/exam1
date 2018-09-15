define(function(){
	function Code(){};
	function Yanzheng(){};
	Code.prototype.init = function(){
		//生成二维码
		var box = $(".input"),
			content = $("#wrap"),
			btn = $("#change"),
			dianji = $(".sure");
			
			var arrYz = yanzheng();
			content.html(arrYz.join(""));
			dianji.on("click",function(){
				var value = box.val();
				console.log(value);
				if(value.toLowerCase() === arrYz.join("").toLowerCase()){
					alert("验证通过");
				}
			})			
			btn.on("click",function(){
				arrYz = yanzheng();
				content.html(arrYz.join(""));
			})
			function randomNum(){
			var num = parseInt(Math.random()*10) + 48;
			return String.fromCharCode(num);
		}
		function randomLower(){
			var num = parseInt(Math.random()*26) + 97;
			return String.fromCharCode(num);
		}	
		function randomUpper(){
			var num = parseInt(Math.random()*26) + 65;
			return String.fromCharCode(num);
		}	
		function randomChar(){
			var num = parseInt(Math.random()*3);				
			switch(num){
				case 0 : return randomNum();
				case 1 : return randomLower();
				case 2 : return randomUpper();
			}
		}
		function yanzheng(){
			var arr=[];
			for(var i = 0; i < 4; i++){
				arr.push(randomChar());
			}
			return arr;
		}
	}
	Yanzheng.prototype.succ=function(){
		
	}
	return new Code();
});