var subfirst = document.getElementsByClassName("subfirst");
var kaiguan = 1;
$.ajax({
    url: "../../php/code/zigbee.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
        //请求成功时处理
     	arr2 = arr.splice(13,8);
        arr1 = arr;
        create(arr1);
        subfirst[0].onmouseover = function() {
			for (var i = 0; i < subfirst.length; i++) {
				subfirst[i].id = "subfirst2";
			}
			this.id = "";
			if (kaiguan==0) {
				$(".Products").remove();
				create(arr1);
				kaiguan = 1;
			}
		}
		subfirst[1].onmouseover = function() {
			for (var i = 0; i < subfirst.length; i++) {
				subfirst[i].id = "subfirst2";
			}
			this.id = "";
			if (kaiguan==1) {
				$(".Products").remove();
				create(arr2);
				kaiguan = 0;
			}
		}
    }
});


	


function create(arr){
	for (var i = 0; i < arr.length; i++) {
		var Products = $("<div/>");
		Products.addClass("Products");
		$(".content").append(Products);
		var ProductsA = $("<a/>");
		ProductsA.attr("href","#");
		Products.append(ProductsA);
		var img = $("<img/>");
		img.attr("src","../img/ZigBeeImg/"+arr[i].product);
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
		remark.attr("href","#");
		remark.text("查看详情>>");
		Products.append(remark);
		var remark = $("<span/>");
		remark.text(arr[i].remark);
		Products.append(remark);
	}
}