
$.ajax({
    url: "../../php/code/gprs.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
        //请求成功时处理
        create(arr);
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
		img.attr("src","../img/GPRSImg/"+arr[i].product);
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