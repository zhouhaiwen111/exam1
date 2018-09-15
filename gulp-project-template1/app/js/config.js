require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"template": "libs/template-web",
		"url": "module/url",
		"header":"module/header",
		"footer":"module/footer",
		"lunbo":"module/lunbo",
		"zhuce":"module/zhuce",
		"denglu":"module/denglu",
		"detail":"module/detail",
		"shangcheng":"module/shangcheng"
	},
	shim: {
		
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		lunbo:{
			deps:["jquery"]
		},
		zhuce:{
			deps:["jquery"]
		},
		denglu:{
			deps:["jquery"]
		},
		detail:{
			deps:["jquery"]
		},
		shangcheng:{
			deps:["jquery"]
		}
		
	}
})