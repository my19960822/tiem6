var subfirst = document.getElementsByClassName("subfirst");
var bottom = document.getElementsByClassName("bottom");
var content = document.getElementsByClassName("content");
	
	for (var i = 1; i < 5; i++) {
		bottom[i].style.display = "none";
	}

		$.ajax({
    			url: "../../php/code/ld.php?id="+1,    //请求的url地址
    			dataType: "json",   //返回格式为json
    			type: "GET",   //请求方式
    			success: function(arr) {
        			//请求成功时处理
   				create(arr,content[0])
    			}
		});
		$.ajax({
    			url: "../../php/code/ld.php?id="+2,    //请求的url地址
    			dataType: "json",   //返回格式为json
    			type: "GET",   //请求方式
    			success: function(arr) {
        			//请求成功时处理
   				create(arr,content[1])
    			}
		});

	for (var i = 0; i < subfirst.length; i++) {
		subfirst[i].index = i
		subfirst[i].onmouseover = function() {
			clear()
			this.id = "subfirst2";
			bottom[this.index].style.display = "block";
		}
	}
	function clear(){
		for (var i = 0; i < subfirst.length; i++) {
			subfirst[i].id = "";
			bottom[i].style.display = "none";
		}
	}

	


function create(arr,wrap){
	for (var i = 0; i < arr.length; i++) {
		var Products = $("<div/>");
		Products.addClass("Products");
		$(wrap).append(Products);
		var ProductsA = $("<a/>");
		ProductsA.attr("href","../html/subcpzx.html");
		Products.append(ProductsA);
		var img = $("<img/>");
		img.attr("src","../img/ldImg/"+arr[i].product);
		ProductsA.append(img);
		var type = $("<span/>");
		type.text(arr[i].type);
		Products.append(type);
		var size = $("<span/>");
		size.text(arr[i].size);
		Products.append(size);
		var port = $("<span/>");
		port.text(arr[i].port);
		Products.append(port);
		var remark = $("<a>");
		remark.attr("href","../html/subcpzx.html");
		remark.text("查看详情>>");
		Products.append(remark);	
	}
}