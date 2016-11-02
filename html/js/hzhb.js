
$.ajax({
    url: "../../php/code/hzhb.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
        //请求成功时处理
        create(arr);
    }
});



function create(arr){
	for (var i = 0; i < arr.length; i++) {
		var logo = $("<div/>");
		logo.addClass("logo");
		$(".main").append(logo);
		var img = $("<img/>");
		img.attr("src","../img/hzhbImg/"+arr[i].img);
		logo.append(img);
		var p = $("<p/>");
		p.text(arr[i].content)
		logo.append(p);
		var a = $("<a/>");
		a.attr("href","#");
		a.text("查看更多>>")
		p.append(a);
	}
}
